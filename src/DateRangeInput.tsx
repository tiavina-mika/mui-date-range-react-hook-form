import { TextField, TextFieldProps } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

type Props = {
  onChange: (value: any) => void;
  value: null[] | Dayjs[];
} & TextFieldProps;
const DateRangeInput = ({
  onChange,
  value = [null, null],
  ...inputProps
}: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        inputFormat="DD/MM/YYYY"
        value={value[0]}
        onChange={(date) => {
          onChange([dayjs(date).toDate(), value[1]]);
        }}
        renderInput={(params) => (
          <TextField
            variant="standard"
            margin="dense"
            fullWidth
            color="primary"
            {...params}
            {...inputProps}
          />
        )}
      />
      <DesktopDatePicker
        inputFormat="DD/MM/YYYY"
        value={value[1]}
        onChange={(date) => {
          onChange([value[0], dayjs(date).toDate()]);
        }}
        renderInput={(params) => (
          <TextField
            variant="standard"
            margin="dense"
            fullWidth
            color="primary"
            {...params}
            {...inputProps}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DateRangeInput;
