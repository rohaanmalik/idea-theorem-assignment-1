import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Box, Typography, FormLabel } from '@mui/material';



export default function Form() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height={{ md: "100%" }}
    >
      <Typography variant="h6" fontWeight="bold" mb={5}>
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
  );
}