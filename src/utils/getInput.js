import TextField from "@mui/material/TextField";
import { Box, Button, MenuItem } from "@mui/material";

export const getInput = (item, ref, otherProps, errors, sx) => {
  let itemContent;

  switch (item.type) {
    case "text":
      itemContent = (
        <TextField
          fullWidth
          sx={sx}
          label={item.label}
          inputRef={ref}
          {...otherProps}
          key={item.name}
          error={errors[item.name] ? true : false}
          helperText={errors[item.name]?.message || " "}
          placeholder={item.placeholder}
          size="small"
        />
      );
      break;
    case "password":
      itemContent = (
        <TextField
          fullWidth
          sx={sx}
          label={item.label}
          inputRef={ref}
          {...otherProps}
          key={item.name}
          error={errors[item.name] ? true : false}
          helperText={errors[item.name]?.message || " "}
          placeholder={item.placeholder}
          type="password"
          size="small"
        />
      );
      break;
    case "number":
      itemContent = (
        <TextField
          fullWidth
          sx={sx}
          label={item.label}
          type="number"
          inputRef={ref}
          {...otherProps}
          key={item.name}
          error={errors[item.name] ? true : false}
          helperText={errors[item.name]?.message || " "}
          placeholder={item.placeholder}
          size="small"
        />
      );
      break;
    case "textarea":
      itemContent = (
        <TextField
          sx={sx}
          fullWidth
          multiline
          maxRows={4}
          label={item.label}
          type="number"
          inputRef={ref}
          {...otherProps}
          key={item.name}
          error={errors[item.name] ? true : false}
          helperText={errors[item.name]?.message || " "}
          placeholder={item.placeholder}
          size="small"
        />
      );
      break;
    case "select":
      itemContent = (
        <TextField
          fullWidth
          sx={sx}
          select
          label={item.label}
          inputRef={ref}
          {...otherProps}
          key={item.name}
          error={errors[item.name] ? true : false}
          helperText={errors[item.name]?.message || " "}
          placeholder={item.placeholder}
          size="small"
        >
          {item.options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      );
      break;
    case "file":
      itemContent = (
        <Box
          key={item.name}
          sx={{
            ...sx,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ padding: "1rem", width: 200 }}
            component="label"
          >
            Upload File
            <input type="file" hidden ref={ref} {...otherProps} />
          </Button>
          <p
            style={{
              color: "#d32f2f",
              fontFamily: "Roboto Helvetica Arial sans-serif",
              fontWeight: "400",
              fontSize: "0.75rem",
              lineHeight: "1.66",
              letterSpacing: "0.03333em",
              textAlign: "left",
              marginTop: "4px",
              marginRight: "0",
              marginBottom: "0",
              marginLeft: "0",
            }}
          >
            {errors[item.name]?.message}
          </p>
        </Box>
      );
      break;
    default:
      itemContent = null;
  }
  return itemContent;
};
