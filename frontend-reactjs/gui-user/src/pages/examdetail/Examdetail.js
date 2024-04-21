import React, { useState } from "react";
import {
  Badge,
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import UserImage from "../../data/imgs/user_icon.webp";
import "./examdetail.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
function Examdetail() {
  const [tabNumber, setTabNumber] = useState(0);
  const handleTabNumber = (number) => {
    setTabNumber(number);
  };
  return (
    <div id="id-examdetail">
      <Header />
      <Container className="wrap">
        <Row>
          <Col md={9} xs={12} >
            <div className="content-block">
              <Stack direction="horizontal" gap={2}>
                <Badge pill bg="secondary">
                  # IELTS Academic
                </Badge>
                <Badge pill bg="secondary">
                  # IELTS Academic
                </Badge>
              </Stack>
              <h1 className="title">IELTS Simulation Listening test 2</h1>
              <div className="tab-container">
                <Stack direction="horizontal" gap={2}>
                  <Button
                    onClick={() => handleTabNumber(0)}
                    className={`tab-pill ${tabNumber === 0 && "active"}`}
                  >
                    Thông tin đề thi
                  </Button>
                  <Button
                    onClick={() => handleTabNumber(1)}
                    className={`tab-pill ${tabNumber === 1 && "active"}`}
                  >
                    Đáp án/scripts
                  </Button>
                </Stack>
                <div className={`tab-content ${tabNumber === 0 || "d-none"}`}>
                  <ul className="list-sub">
                    <li>
                      <AccessTimeIcon />
                    </li>
                    <li>Thời gian làm bài: </li>
                    <li>40 phút |</li>
                    <li>4 phần thi |</li>
                    <li>40 câu hỏi |</li>
                    <li>244 bình luận</li>
                  </ul>
                  <ul className="list-sub">
                    <li>
                      <PersonIcon />
                    </li>
                    <li>105537 người đã luyện tập đề thi này</li>
                  </ul>
                  <div className="notify">
                    Chú ý: để được quy đổi sang scaled score (ví dụ trên thang
                    điểm 990 cho TOEIC hoặc 9.0 cho IELTS), vui lòng chọn chế độ
                    làm FULL TEST.
                  </div>
                  <Tabs
                    defaultActiveKey="luyentap"
                    id="uncontrolled-tab-example"
                    className="mb-3 custom-tabs"
                    variant="underline"
                  >
                    <Tab eventKey="luyentap" title="Luyện tập">
                      <Stack>
                        <Form>
                          <Form.Check
                            type="radio"
                            id="exam1"
                            name="examNumber"
                            label="Đề thi 1 (40 câu)"
                            defaultChecked
                          />
                          <Form.Check
                            type="radio"
                            id="exam2"
                            name="examNumber"
                            label="Đề thi 2 (40 câu)"
                          />
                        </Form>
                        <span className="note">
                          Giới hạn thời gian để trống để làm bài không giới hạn
                        </span>

                        <Form.Select aria-label="Default select example">
                          <option>-- Chọn thời gian --</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                        <div>
                          <Button className="btn-custom">Luyện tập</Button>
                        </div>
                      </Stack>
                    </Tab>
                    <Tab eventKey="Thảo luận" title="Thảo luận">
                      Tab content for Profile
                    </Tab>
                    <Tab eventKey="contact" title="Contact">
                      Tab content for Contact
                    </Tab>
                  </Tabs>
                </div>
                <div className={`tab-content ${tabNumber === 1 || "d-none"}`}>
                  <span>Các phần thi:</span>
                  <ul>
                    <li>
                      <Link className="p-2">Đề 1</Link>
                    </li>
                    <li>
                      <Link className="p-2">Đề 2</Link>
                    </li>
                    <li>
                      <Link className="p-2">Đề 3</Link>
                    </li>
                    <li>
                      <Link className="p-2">Đề 4</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} xs={12} >
            <div className="user-target-info-box">
              <Image src={UserImage} roundedCircle height={70} />
              <div className="text-center">
                <strong>20130302</strong>
              </div>
              <div className="user-target-info">
                <p>
                  <i className="user-sub">
                    <ErrorOutlineIcon className="icon" /> 
                    <span>Bạn chưa tạo mục tiêu cho quá trình luyện thi của mình.</span>
                    <Link className="link" href="/">Tạo ngay</Link>.
                  </i>
                </p>
                <div className="mt-3">
                  <Button className="w-100 mt-3 btn-custom" variant="outline-secondary">
                    <StackedLineChartIcon /> Thống kê kết quả
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Examdetail;
