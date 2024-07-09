import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Layout/Header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import ForgetPassword from "./components/Auth/ForgetPassword.jsx";
import ResetPassword from "./components/Auth/ResetPassword.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Request from "./components/Request/Request.jsx";
import About from "./components/About/About.jsx";
import Subscribe from "./components/Payments/Subscribe.jsx";
import PaymentSuccess from "./components/Payments/PaymentSuccess.jsx";
import NotFound from "./components/Layout/NotFound/NotFound.jsx";
import PaymentFail from "./components/Payments/PaymentFail.jsx";
import CoursePage from "./components/CoursePage/CoursePage.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import UpdateProfile from "./components/Profile/UpdateProfile.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse.jsx";
import AdminCourse from "./components/Admin/AdminCourses/AdminCourses.jsx";
import Users from "./components/Admin/Users/Users.jsx";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { clearError, clearMessage } from "./redux/reducers/userReducer.js";
import { useEffect } from "react";
import { loadUser } from "./redux/thunks/user.js";
import { ProtectedRoute } from "protected-route-react";
import Loader from "./components/Layout/Loader/Loader.jsx";

function App() {
  window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route path="/courses" element={<Courses />} />
            <Route
              path="/course/:id"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CoursePage user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/request" element={<Request />} />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
            <Route path="/*" element={<NotFound />} />
            {/*Admin*/}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                >
                  <AdminCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === "admin"}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster toastOptions={{ duration: 5000 }} />
        </>
      )}
    </Router>
  );
}

export default App;
