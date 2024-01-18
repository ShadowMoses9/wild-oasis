import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  const { isEditing, editSettings } = useEditSettings();
  if (isLoading) return <Spinner />;

  function handleEdit(e) {
    const { value, id, defaultValue } = e.target;

    if (!value || !id || defaultValue === value) return;
    editSettings({ [id]: value });
    e.target.defaultValue = value;
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="minBookingLength"
          defaultValue={minBookingLength}
          disabled={isEditing}
          onBlur={(e) => handleEdit(e)}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="maxBookingLength"
          disabled={isEditing}
          defaultValue={maxBookingLength}
          onBlur={(e) => handleEdit(e)}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="maxGuestsPerBooking"
          disabled={isEditing}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleEdit(e)}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfastPrice"
          disabled={isEditing}
          defaultValue={breakfastPrice}
          onBlur={(e) => handleEdit(e)}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
