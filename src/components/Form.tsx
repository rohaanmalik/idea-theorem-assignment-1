import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, FormLabel, Select, MenuItem } from '@mui/material';



export default function Form() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log("Form data");
    console.log(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        pt={14}
        mx="auto"
        width="100%"
        maxWidth="sm"
        px={{ xs: 2, md: 0 }}
        py={{ xs: 4, md: 0 }}
      >
        <Typography variant="h6" fontWeight="bold" align="left" mb={3}>
          Create User Account
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            bgcolor="white"
            border={1}
            borderColor="grey.200"
            borderRadius="borderRadius"
            boxShadow={1}
            p={3}
            display="flex"
            flexDirection="column"
            gap={2}
            justifyContent="space-between"
          >
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{ required: "Full Name is required" }}
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
                    id="outlined-required"
                    label="Full Name"
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
              rules={{ required: "Contact Number is required" }}
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
                    id="outlined-required"
                    label="Contact Number"
                    error={!!errors.contactNumber}
                    {...register("contactNumber")}
                    helperText={errors.contactNumber?.message}
                    sx={{ width: "100%" }}
                  />
                </Box>
              )}
            />

            <Controller
              name="birthdayDate"
              control={control}
              defaultValue={{ day: "", month: "", year: "" }}
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
                    Birthday Date
                  </FormLabel>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Controller
                      name="day"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          sx={{
                            width: "33%",
                            mr: 2,
                          }}
                        >
                          {/* Generate day options */}
                          {[...Array(31)].map((_, i) => (
                            <MenuItem key={i} value={i + 1}>
                              {i + 1}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                    <Controller
                      name="month"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          sx={{
                            width: "33%",
                            mr: 2,
                          }}
                        >
                          {/* Generate month options */}
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month, i) => (
                            <MenuItem key={i} value={month}>
                              {month}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />

                    <Controller
                      name="year"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <Select
                          {...field}
                          sx={{
                            width: "33%",
                          }}
                        >
                          {/* Generate year options */}
                          {[...Array(121)].map((_, i) => (
                            <MenuItem key={i} value={i + 1900}>
                              {i + 1900}
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                  </Box>
                </Box>
              )}
            />
            <Controller
              name="emailAddress"
              control={control}
              defaultValue=""
              rules={{ required: "Email Address is required" }}
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
                    Email Address
                  </FormLabel>
                  <TextField
                    {...field}
                    id="outlined-required"
                    label="Email Address"
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
              rules={{ required: "Password is required" }}
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
                    Password
                  </FormLabel>
                  <TextField
                    {...field}
                    label="Password"
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
              rules={{ required: "Confirm Password is required" }}
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
                    Confirm Password
                  </FormLabel>
                  <TextField
                    {...field}
                    id="outlined-required"
                    label="Confirm Password"
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

          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                py: 1,
                px: 2,
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
              sx={{
                color: "white",
                fontWeight: "bold",
                px: 2,
                py: 1,
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
  );
}