
import App from "./App"
import React from "react"
import ReactDOM  from "react-dom/client"
import ClientType from "./pages/ClientType"
import NavbarSec from "./Components/NavbarSec"
import Nonstudent from "./pages/Nonstudent"
import Students from "./pages/Students"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Certificate from "./pages/Certificate"
import Credential from "./pages/Credential"
import OtherDocument from "./pages/OtherDocument"
import DocumentReview from "./pages/DocumentReview"



  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>
      },

    {
        path: "/",
        element: <NavbarSec/>
        },

    {
        path: "/clienttype",
        element: <ClientType/>
        },
    {
            path: "/clienttype/nonstudent",
            element: <Nonstudent/>
        },
    {
            path: "/clienttype/student",
            element: <Students/>
        },
    {
            path: "/clienttype/student/requestcertificate",
            element: <Certificate/>
        },
    {
            path: "/clienttype/student/requestcredential",
            element: <Credential/>
        },
    {
            path: "/clienttype/student/otherdocument",
            element: <OtherDocument/>
        },
    {
        path: "/clienttype/student/requestcertificate/documentreview",
        element: <DocumentReview/>
    }

    ]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
) ;