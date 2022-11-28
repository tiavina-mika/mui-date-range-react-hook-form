import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Typography
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import DateRangeInput from "./DateRangeInput";
import dayjs from "dayjs";

const schema = z.object({
  birthday: z.array(z.date().optional())
});

const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError
  } = useForm({
    resolver: zodResolver(schema)
  });

  const customSubmit = (data) => console.log(data);

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
        <form onSubmit={handleSubmit(customSubmit)}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <FormControl component="fieldset" error={!!errors?.birthday}>
              <FormLabel component="legend">Birthday</FormLabel>
              <Controller
                name="birthday"
                control={control}
                render={({ field: { onChange, value } }) => {
                  if (
                    value &&
                    value[0] &&
                    value[1] &&
                    dayjs(value[1]).isBefore(value[0])
                  ) {
                    setError("birthday", { message: "Hello" });
                  }
                  return <DateRangeInput onChange={onChange} value={value} />;
                }}
              />
            </FormControl>
            <Box>
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </Box>
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
