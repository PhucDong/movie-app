import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Dialog, DialogTitle, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const getCharacterValidationError = (str) => {
  return `Your password must have at least 1 ${str} character`;
};

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});

export default function LogInForm(props) {
  const { onCloseLogInForm, openLogInForm, checkValidUser, registeredUser } =
    props;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  console.log(41, watch());

  const onSubmit = (data) => {
    console.log(42, data);
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);

    if (checkValidUser()) {
      onCloseLogInForm();
      navigate("/user");
    }
  };

  const handleClose = () => {
    localStorage.clear();
    onCloseLogInForm();
  };

  return (
    <CustomStyledLogInForm onClose={handleClose} open={openLogInForm}>
      <DialogTitle>Sign In</DialogTitle>

      {!localStorage.getItem("isValidUser") &&
      !localStorage.getItem("password") ? (
        ""
      ) : registeredUser.email !== localStorage.getItem("email") ? (
        <p className="error-message">Incorrect email. Please try again.</p>
      ) : registeredUser.password !== localStorage.getItem("password") ? (
        <p className="error-message">Incorrect password. Please try again.</p>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography>Email</Typography>
        <input {...register("email")} />
        {/* {errors.firstName && <p>First Name is required.</p>} */}
        <p className="error-message">{errors.email?.message}</p>

        <Typography>Password</Typography>
        <input {...register("password")} />
        {/* {errors.lastName && <p>Last Name is required.</p>} */}
        <p className="error-message">{errors.password?.message}</p>

        <input type="submit" value="Sign In" className="submit-btn" />
      </form>
    </CustomStyledLogInForm>
  );
}

const CustomStyledLogInForm = styled(Dialog)(({ theme }) => ({
  "& .MuiTypography-root": {
    color: theme.palette.info.main,
    fontSize: "14px",
    marginBottom: "3px",
  },
  "& .MuiDialogTitle-root": {
    fontSize: "26px",
    fontWeight: 700,
    padding: 0,
    marginBottom: "14px",
  },
  "& .MuiDialog-paper": {
    padding: "30px 22px",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "10px",
  },
  "& input": {
    borderRadius: "8px",
    border: "0.5px solid #C9C9C9",
    padding: "8px 15px",
    fontSize: "16px",
    color: "#C9C9C9",
    width: "100%",
  },
  "& .error-message": {
    margin: "4px 0 22px 0",
    color: "#ff0033",
  },
  "& .submit-btn": {
    width: "100%",
    border: "none",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: "20px",
    borderRadius: "8px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .MuiTypography-root": {
      color: theme.palette.info.main,
      fontSize: "16px",
      marginBottom: "5px",
    },
    "& .MuiDialogTitle-root": {
      fontSize: "30px",
      marginBottom: "18px",
      textAlign: "center",
    },
    "& .MuiDialog-paper": {
      padding: "46px 44px",
      width: "400px",
      height: "auto",
    },
    "& input": {
      padding: "12px 18px",
      fontSize: "16px",
    },
    "& .submit-btn": {
      fontSize: "22px",
    },
  },
}));
