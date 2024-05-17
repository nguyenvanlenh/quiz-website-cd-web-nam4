import React, { useEffect, useState } from "react";
import "./Question.scss";
import { Form } from "react-bootstrap";
import { TYPE_ANSWERS } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { updateQuestion } from "../../redux/slices/listQuestionSlice";
import { userAnswerService } from "../../services/userAnswerService";

function Question(prop) {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const authLocal = JSON.parse(localStorage.getItem('auth'));
    if (authLocal) {
      setAuth(authLocal);
    }
  }, []);
  const [selectedExam, setSelectedExam] = useState(""); // State để lưu trữ giá trị của radio button được chọn
  const dispatch = useDispatch()
  const handleExamChange = (event) => {
    setSelectedExam(event.target.value); // Cập nhật giá trị của state khi người dùng thay đổi radio button
    console.log("selectedExam", event.target.value);
    const selected = { idQuestion: prop.id, idAnswer: event.target.value}
    dispatch(updateQuestion(selected))

    // nộp từng câu(idUser, idOption)
    // check thêm mới hay là update ở đây
    userAnswerService.postUserAnswer(auth?.userId, event.target.value)
  };

  return (
    <div id={"q-"+prop.id} className="question-container">
      <div className="wrap-number">
        <span className="number">{prop.numberSentence + 1}</span>
      </div>
      <div className="content">
        <div className="content-question">{prop.contentQuestion}</div>
        <Form className="list-answers">
          {
              prop.listAnswers.map((answer, index)=> (
                <Form.Check
                key={answer.id}
                type="radio"
                value={answer.id}
                name="answers"
                id={answer.id}
                label={TYPE_ANSWERS[index]+". "+ answer.value}
                // checked={answer.select}s
                onChange={handleExamChange}
                />
              ))
          }
        </Form>
      </div>
    </div>
  );
}

export default Question;
