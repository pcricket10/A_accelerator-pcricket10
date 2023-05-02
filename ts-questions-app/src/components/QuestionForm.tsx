import React, { useEffect, useState } from 'react';




const QuestionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
    console.log(question);
    setName('');
    setQuestion('');
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Your Question:
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Ask Question</button>
    </form>
  );
};

export default QuestionForm;
