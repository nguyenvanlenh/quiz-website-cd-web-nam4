import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { FormQuestion } from "./pages/FormQuestion/FormQuestion";
import { CreateExam } from "./pages/CreateExam/CreateExam";
import { CreateStudent } from "./pages/CreateStudent/CreateStudent";
import { ListExams } from "./pages/ListExams/ListExams";

import { ResultStatistics } from "./pages/Statistics/ResultStatistics";

import Examdetail from "./pages/examdetail/Examdetail";
import Examining from "./pages/examing/Examining";
import Result from "./pages/result/Result";
import Register from "./pages/register/Register";
import ExaminingRules from "./pages/examRules/ExaminingRules";
import { ManagementExams } from "./pages/ManagementExams/ManagementExams";
import { ManagementQuestion } from "./pages/ManagementQuestion/ManagementQuestion";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/register",
        element: <Register />

    }
    ,
    {
        path: "/create-exam",
        element: <CreateExam />
    }
    ,
    {
        path: "/form-question",
        element: <FormQuestion />
    },
    {
        path: "/create-student",
        element: <CreateStudent />
    },
    {
        path: "/statistics",
        element: <ResultStatistics />
    },
    {
        path: "/list-exams",
        element: <ListExams />
    },
    {
        path: "/exam-detail",
        element: <Examdetail />
    },
    {
        path: "examining",
        element: <Examining />
    },
    {
        path: "/result",
        element: <Result />
    },
    {
        path: "/examining-rules",
        element: <ExaminingRules />
    },
    {
        path: "/manage-exam",
        element: <ManagementExams />
    },
    {
        path: "/manage-question",
        element: <ManagementQuestion />
    }

]);

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}
