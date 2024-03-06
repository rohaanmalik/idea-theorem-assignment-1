import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, FormLabel, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { validationSchema } from '../validation';
import { z } from 'zod';


type ValidationSchema = z.infer<typeof validationSchema>

export default function Form() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data");
    console.log(data);
  };

  console.log(errors)

  return (
    <Box sx={{ width: { xs: "100vw", sm: "35vw" }, margin: "auto" }}>
      <Box
        p={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
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

            <Box display="flex" flexDirection="column" alignItems="flex-start">
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
                  <InputLabel id="day">Day</InputLabel>
                  <Controller
                    name="day"
                    control={control}
                    defaultValue={1}
                    render={({ field }) => (
                      <Select {...field}
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
                </FormControl>

                <FormControl
                  sx={{
                    width: "33%",
                    mr: 2,
                  }}
                >
                  <InputLabel id="month">Month</InputLabel>
                  <Controller
                    name="month"
                    control={control}
                    defaultValue="January"
                    render={({ field }) => (
                      <Select {...field}>
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
                </FormControl>
                <FormControl
                  sx={{
                    width: "33%",
                    mr: 2,
                  }}
                >
                  <InputLabel id="year">Year</InputLabel>
                  <Controller
                    name="year"
                    control={control}
                    defaultValue={1901}
                    render={({ field }) => (
                      <Select {...field}>
                        {/* Generate year options */}
                        {[...Array(121)].map((_, i) => (
                          <MenuItem key={i} value={i + 1900}>
                            {i + 1900}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </FormControl>
              </Box>
            </Box>
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