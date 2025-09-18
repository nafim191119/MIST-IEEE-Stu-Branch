import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Members from "../pages/Members/Members/Members";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'members',
            element:<Members></Members>
        }
    ]
  },
]);