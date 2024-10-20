import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Button,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import "./CustomerReview.css";

export default function CustomerReview() {
  const [info, setInfo] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    PhoneNum: "",
  });
  const [service, setService] = useState("");
  const [ratings, setRatings] = useState({
    delivery: 0,
    responseTime: 0,
    quality: 0,
    communication: 0,
  });
  const [feedback, setFeedback] = useState("");

  const notify = () => {
    toast.success("Feedback sent successfully!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const CustomerReviewData = {
    infoUser: info,
    serviceFeedback: service,
    ratingsFeedback: ratings,
    feedbackMessage: feedback,
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleRatingChange = (name, value) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [name]: value,
    }));
  };

  const handleInfoChange = (event) => {
    const { name, value } = event.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleFeedback = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
    fetch(import.meta.env.VITE_GOOGLE_SHEET_API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            Fname: CustomerReviewData.infoUser.Fname,
            Lname: CustomerReviewData.infoUser.Lname,
            Email: CustomerReviewData.infoUser.Email,
            PhoneNum: CustomerReviewData.infoUser.PhoneNum,
            Service: CustomerReviewData.serviceFeedback,
            Q1: CustomerReviewData.ratingsFeedback.delivery,
            Q2: CustomerReviewData.ratingsFeedback.responseTime,
            Q3: CustomerReviewData.ratingsFeedback.quality,
            Q4: CustomerReviewData.ratingsFeedback.communication,
            Message: CustomerReviewData.feedbackMessage,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setInfo({
          Fname: "",
          Lname: "",
          Email: "",
          PhoneNum: "",
        });
        setService();
        setRatings({
          delivery: 0,
          responseTime: 0,
          quality: 0,
          communication: 0,
        });
        setFeedback("");
      });
  };

  return (
    <>
      <div className="CustomerReview_Container">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="Header">
            <Typography
              sx={{
                paddingTop: "5%",
                paddingBottom: "1%",
                fontSize: {
                  sm: 50,
                  xs: 40,
                },
              }}
              variant="h2"
              className="Header_Content"
            >
              Customer Feedback
            </Typography>
          </div>
          <div className="Baseline" />

          <div className="Name_Input">
            <TextField
              sx={{
                marginRight: {
                  sm: 5,
                },
              }}
              id="outline-basic"
              label="First Name"
              variant="outlined"
              name="Fname"
              value={info.Fname}
              onChange={handleInfoChange}
              required
            />
            <TextField
              id="outline-basic"
              label="Last Name"
              variant="outlined"
              name="Lname"
              value={info.Lname}
              onChange={handleInfoChange}
              required
            />
          </div>

          <div className="Contact_Input">
            <TextField
              sx={{ width: "53%", marginTop: "2%" }}
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              name="Email"
              value={info.Email}
              onChange={handleInfoChange}
              required
            />
            <TextField
              sx={{ width: "53%", marginTop: "2%" }}
              id="standard-basic"
              label="Phone number"
              variant="standard"
              name="PhoneNum"
              value={info.PhoneNum}
              onChange={handleInfoChange}
            />
          </div>

          <div className="Evaluation_Input">
            <div className="ServiceSL_Container">
              <FormControl fullWidth sx={{ width: "53%", marginTop: "2%" }}>
                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={service}
                  label="Service"
                  onChange={handleServiceChange}
                >
                  <MenuItem value={"Customer Service"}>
                    Customer Service
                  </MenuItem>
                  <MenuItem value={"Maintenance Service"}>
                    Maintenance Service
                  </MenuItem>
                  <MenuItem value={"Installation Service"}>
                    Installation Service
                  </MenuItem>
                  <MenuItem value={"Installation Service"}>
                    Sale Service
                  </MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="Criteria_Container">
              <div className="Q">
                <Typography
                  variant="body"
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 23,
                      lg: 23,
                      xl: 26,
                    },
                  }}
                >
                  1.How satisfied are you with the delivery of our service?
                </Typography>
                <Rating
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 35,
                      md: 40,
                      lg: 40,
                      xl: 40,
                    },
                    marginTop: "1%",
                  }}
                  name="delivery"
                  value={ratings.delivery}
                  onChange={(event, newValue) =>
                    handleRatingChange("delivery", newValue)
                  }
                />
              </div>
              <div className="Q">
                <Typography
                  variant="body"
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 23,
                      lg: 23,
                      xl: 26,
                    },
                  }}
                >
                  2.How do you rate our service response time?
                </Typography>
                <Rating
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 35,
                      md: 40,
                      lg: 40,
                      xl: 40,
                    },
                    marginTop: "1%",
                  }}
                  name="responseTime"
                  value={ratings.responseTime}
                  onChange={(event, newValue) =>
                    handleRatingChange("responseTime", newValue)
                  }
                />
              </div>
              <div className="Q">
                <Typography
                  variant="body"
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 23,
                      lg: 23,
                      xl: 26,
                    },
                  }}
                >
                  3.How satisfied are you with the quality of our service?
                </Typography>
                <Rating
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 35,
                      md: 40,
                      lg: 40,
                      xl: 40,
                    },
                    marginTop: "1%",
                  }}
                  name="quality"
                  value={ratings.quality}
                  onChange={(event, newValue) =>
                    handleRatingChange("quality", newValue)
                  }
                />
              </div>
              <div className="Q">
                <Typography
                  variant="body"
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 23,
                      lg: 23,
                      xl: 26,
                    },
                  }}
                >
                  4.How do you rate our customer communication?
                </Typography>
                <Rating
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 35,
                      md: 40,
                      lg: 40,
                      xl: 40,
                    },
                    marginTop: "1%",
                  }}
                  name="communication"
                  value={ratings.communication}
                  onChange={(event, newValue) =>
                    handleRatingChange("communication", newValue)
                  }
                />
              </div>
              <div className="Text_Feedback">
                <Typography
                  variant="body"
                  sx={{
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 23,
                      lg: 23,
                      xl: 26,
                    },
                  }}
                >
                  What can we do to make your experience better?
                </Typography>
                <textarea
                  value={feedback}
                  onChange={handleFeedback}
                  style={{
                    width: "55%",
                    height: "150px",
                    marginTop: "3%",
                    resize: "none",
                    fontSize: "20px",
                    fontFamily: "san-serif",
                  }}
                />
              </div>
            </div>
          </div>
          <Button sx={{ marginLeft: "65%" }} variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
