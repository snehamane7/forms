
import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {v4} from "uuid";

function Update() {
  const { formId } = useParams();
  const [formData, setFormData] = useState({
    user_id: "",
    form_name: "",
    form_id: "",
    submission_id: v4(),
    questions: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Fetch data from the API
    axios.get('http://127.0.0.1:5000/home')
      .then(response => {
        if (response && response.data.forms) {
          const forms = response.data.forms;
          const selectedForm = forms.find(form => form.id === formId);
          if (selectedForm) {
            const savedDraft = localStorage.getItem(`form_${formId}`);
            const parsedDraft = savedDraft ? JSON.parse(savedDraft) : null;
            const initialQuestions = selectedForm.questions ? selectedForm.questions.map(question => ({
              question_name: question.name,
              question_code: question.code,
              is_mandatory: question.is_mandatory,
              response: '',
            })) : [];

            setFormData({
              user_id: selectedForm.user_id || "",
              form_name: selectedForm.form_name || "",
              form_id: selectedForm.form_id || "",
              submission_id: selectedForm.submission_id || "",
              questions: parsedDraft || initialQuestions,
            });
          }
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [formId]);

  const onChangeHandler = (event, questionIndex) => {
    const { name, value } = event.target;
    const updatedQuestions = [...formData.questions];
    updatedQuestions[questionIndex].response = value;
    setFormData({ ...formData, questions: updatedQuestions });
  };

  const handleSubmit = () => {
    const validationErrors = {};
    formData.questions.forEach((question, index) => {
      if (!question.response.trim()) {
        validationErrors[`question_${index}`] = `Please enter ${question.question_name}`;
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Perform update using Axios
      axios.post('http://127.0.0.1:5000/home', formData)
        .then(response => {
          alert("Form submitted successfully");
        })
        .catch(error => {
          console.error('Error submitting form:', error);
          // Handle error, display message.
        });
    }
  };

  const handleSaveDraft = () => {
    localStorage.setItem(`form_${formId}`, JSON.stringify(formData.questions));
    alert("Draft saved successfully");
  };

  return (
    <div className='container'>
      <div className='form-outer'>
        <ul>
          <li>
            <div style={{ paddingLeft: '20px' }}>
              <h3>{formData.form_name}</h3>
              <Form>
                {formData.questions.map((question, questionIndex) => (
                  <div key={question.question_code} className='input'>
                    <Form.Item
                      label={question.question_name}
                      name={question.question_code}
                      rules={question.is_enabled && question.is_mandatory ? [{ required: true, message: `Please enter ${question.question_name}`, whitespace: true }] : []}
                      validateStatus={errors[`question_${questionIndex}`] ? 'error' : ''}
                      help={errors[`question_${questionIndex}`]}
                    >
                      <Input
                        type='text'
                        name={question.question_code}
                        placeholder='Enter here'
                        value={formData.questions[questionIndex].response}
                        onChange={(e) => onChangeHandler(e, questionIndex)}
                        autoComplete='off'
                      />
                    </Form.Item>
                  </div>
                ))}
              </Form>
            </div>
          </li>
        </ul>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleSaveDraft} block>
            Save Draft
          </Button>
          <Button onClick={() => {handleSubmit(); console.log(formData);}} block type='primary'>
          Submit
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Update;
