/* eslint-disable react/prop-types */
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <InputText
              {...field}
              {...rest}
              value={field.value || ""}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };
