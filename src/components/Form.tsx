import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, FormControl, FormLabel, MenuItem, TextField, Typography, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { validationSchema } from '../validation';
import Alert, { AlertStatus } from './Alert';


type ValidationSchema = z.infer<typeof validationSchema>

export default function Form() {

  const isMobile = useMediaQuery('(max-width:600px)');

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const [alertStatus, setAlertStatus] = useState<AlertStatus>("success");
  const [alertMessage, setAlertMessage] = useState<string>("");

  const setUpAlert = (status: AlertStatus, message: string) => {
    setAlertStatus(status);
    setAlertMessage(message);

    // resetting the alert after 3 seconds
    setTimeout(() => {
      setAlertStatus("success");
      setAlertMessage("");
    }, 3000);
  }

  const onSubmit = async (data: {
    fullName: string;
    contactNumber: string;
    day: number;
    month: string;
    year: number;
    emailAddress: string;
    password: string;
    confirmPassword: string;
  }) => {
    try {
      setAlertStatus("success");
      setAlertMessage("");
      // post request to the server
      const response = await fetch(
        "https://fullstack-test-navy.vercel.app/api/users/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: data.fullName,
            contact_number: data.contactNumber,
            email: data.emailAddress,
            password: data.password,
            date_of_birth: `${data.year}-${data.month}-${data.day}`,
          }),
        }
      );

      // if the request is successful
      if (response.ok) {
        setUpAlert("success", "User account successfully created.");
      } else {
        setUpAlert("error", "There was an error creating the account.");
      }
    } catch (error) {
      console.error("Error:", error);
      setUpAlert("error", "There was an error creating the account.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: { md: "100%" },
      }}
    >
      {alertMessage && <Alert status={alertStatus}>{alertMessage}</Alert>}
      <Box sx={{ width: isMobile ? "100vw" : "35vw", margin: "auto" }}>
        <Box
          p={3}
          bgcolor={isMobile ? "white" : "grey.100"}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            align="left"
            mb={3}
            sx={{ pt: isMobile ? 5 : 0 }} // Add top padding on mobile devices
          >
            Create User Account
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              bgcolor="white"
              border={1} // Remove the border on mobile devices
              borderColor="grey.200"
              borderRadius="borderRadius"
              boxShadow={isMobile ? 0 : 1} // Remove the box shadow on mobile devices
              p={3}
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <FormLabel
                      component="legend"
                      sx={{ fontWeight: "bold", color: "#252F3D", mb: 2 }}
                    >
                      Full Name
                    </FormLabel>
                    <TextField
                      {...field}
                      label="Full Name *"
                      error={!!errors.fullName}
                      {...register("fullName")}
                      helperText={errors.fullName?.message}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />

              <Controller
                name="contactNumber"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <FormLabel
                      component="legend"
                      sx={{ fontWeight: "bold", color: "#252F3D", mb: 2 }}
                    >
                      Contact Number
                    </FormLabel>
                    <TextField
                      {...field}
                      label="Contact Number"
                      error={!!errors.contactNumber}
                      {...register("contactNumber")}
                      helperText={errors.contactNumber?.message}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />

              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
              >
                <FormLabel
                  component="legend"
                  sx={{ fontWeight: "bold", color: "#252F3D", mb: 2 }}
                >
                  Birthday Date
                </FormLabel>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <FormControl
                    sx={{
                      width: "33%",
                      mr: 2,
                    }}
                  >
                    <Controller
                      name="day"
                      control={control}
                      defaultValue={1}
                      render={({ field }) => (
                        <TextField label="Day *" select {...field}>
                          {/* Generate day options */}
                          {[...Array(31)].map((_, i) => (
                            <MenuItem key={i} value={i + 1}>
                              {i + 1}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </FormControl>

                  <FormControl
                    sx={{
                      width: "33%",
                      mr: 2,
                    }}
                  >
                    <Controller
                      name="month"
                      control={control}
                      defaultValue="Jan"
                      render={({ field }) => (
                        <TextField label="Month *" select {...field}>
                          {/* Generate month options */}
                          {[
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                          ].map((month, i) => (
                            <MenuItem key={i} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </FormControl>
                  <FormControl
                    sx={{
                      width: "33%",
                      mr: 2,
                    }}
                  >
                    <Controller
                      name="year"
                      control={control}
                      defaultValue={1950}
                      render={({ field }) => (
                        <TextField select label="Year *" {...field}>
                          {/* Generate year options */}
                          {[...Array(74)].map((_, i) => (
                            <MenuItem key={i + 1950} value={i + 1950}>
                              {i + 1950}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Controller
                name="emailAddress"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <FormLabel
                      component="legend"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Email Address
                    </FormLabel>
                    <TextField
                      {...field}
                      label="Email Address *"
                      error={!!errors.emailAddress}
                      {...register("emailAddress")}
                      helperText={errors.emailAddress?.message}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />

              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <FormLabel
                      component="legend"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Password
                    </FormLabel>
                    <TextField
                      {...field}
                      label="Password *"
                      type="password"
                      error={!!errors.password}
                      {...register("password")}
                      helperText={errors.password?.message}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />

              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                  >
                    <FormLabel
                      component="legend"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      Confirm Password
                    </FormLabel>
                    <TextField
                      {...field}
                      label="Confirm Password *"
                      type="password"
                      error={!!errors.confirmPassword}
                      {...register("confirmPassword")}
                      helperText={errors.confirmPassword?.message}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                )}
              />
            </Box>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
              gap={2}
              flexDirection={isMobile ? "column" : "row"} // Adjust the direction based on the screen size
            >
              <Button
                variant="outlined"
                color="secondary"
                size="large"
                sx={{
                  width: isMobile ? "100%" : "25%", // Adjust the width based on the screen size
                  fontWeight: "bold",
                  borderRadius: "borderRadius",
                  "&:hover": {
                    bgcolor: "grey.100",
                  },
                  "&:focus": {
                    zIndex: 10,
                    boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.25)",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  color: "white",
                  width: isMobile ? "100%" : "25%",
                  fontWeight: "bold",
                  borderRadius: "borderRadius",
                  "&:focus": {
                    boxShadow: "0 0 0 0.2rem rgba(0, 0, 0, 0.25)",
                  },
                }}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
}