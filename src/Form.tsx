import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Typography,
  Stack
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DateRangeInput from "./DateRangeInput";

const schema = z.object({
  birthday: z.array(z.date().optional())
});

const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (values) => console.log(values);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl component="fieldset" error={!!errors?.birthday}>
              <FormLabel component="legend" sx={{ mb: 1 }}>
                Birthday
              </FormLabel>
              <Controller
                name="birthday"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DateRangeInput
                    onChange={onChange}
                    value={value}
                    variant="outlined"
                    separator="to"
                  />
                )}
              />
            </FormControl>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button type="button" onClick={reset}>
                Reset
              </Button>
            </Stack>
          </Box>
        </form>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <a href="https://www.linkedin.com/in/tiavina-michael-ralainirina/">
            <Typography>By Tiavina Michael Ralainirina</Typography>
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default Form;
