"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var QuestionForm = function () {
    var _a = (0, react_1.useState)(''), name = _a[0], setName = _a[1];
    var _b = (0, react_1.useState)(''), question = _b[0], setQuestion = _b[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        console.log(name);
        console.log(question);
        setName('');
        setQuestion('');
    };
    return (<form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input type="text" value={name} onChange={function (event) { return setName(event.target.value); }} required/>
      </label>
      <br />
      <label>
        Your Question:
        <textarea value={question} onChange={function (event) { return setQuestion(event.target.value); }} required/>
      </label>
      <br />
      <button type="submit">Ask Question</button>
    </form>);
};
exports.default = QuestionForm;
