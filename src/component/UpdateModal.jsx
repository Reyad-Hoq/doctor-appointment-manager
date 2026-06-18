"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import toast from "react-hot-toast";
import { BiEdit } from "react-icons/bi";


const UpdateModal = ({ item }) => {
  const { _id, phone, patientName, gender, doctorName, appointmentTime, appointmentDate, } = item;
  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const appointment = Object.fromEntries(formData.entries());
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/user/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(appointment),
    }
    );
    const data = await res.json();
    if (data) {
      toast.success("updated successfully")
    }
    window.location.reload();
  }

  return (
    <div>
      <Modal>

        <Button variant="primary" className="rounded-xl bg-blue-600 px-5 py-5 font-medium text-white hover:bg-blue-700">
          <BiEdit /> Update
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Update appointment</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-1">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="p-10 space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Appointment Doctor Info */}
                      <div className="grid grid-cols-2 md:col-span-2">
                        <TextField
                          defaultValue={doctorName}
                          name="description"
                          isDisabled
                        >
                          <Label>Dr. Name</Label>
                          <TextArea
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                        <TextField
                          defaultValue={appointmentTime}
                          name="description"
                          isDisabled
                        >
                          <Label>Appointment Time </Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                      {/* Destination Name */}
                      <TextField
                        defaultValue={patientName}
                        name="patientName"
                        isRequired
                      >
                        <Label>Patient Name</Label>
                        <Input
                          placeholder="Jon Doe"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>
                      {/* Country */}
                      <TextField defaultValue={phone} name="phone" isRequired>
                        <Label>Phone Number</Label>
                        <Input type="number" placeholder="017*****XXX" className="rounded-2xl"
                          min={0} />
                        <FieldError />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select
                          defaultValue={gender}
                          name="gender"
                          isRequired
                          className="w-full"
                          placeholder="Select gender"
                        >
                          <Label>Gender</Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="male" textValue="Male">
                                Male                               <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="female" textValue="female">
                                Female
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={new Date(appointmentDate).toISOString().split("T")[0]}
                          name="appointmentDate"
                          type="date"
                          isRequired
                        >
                          <Label>Appointment Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                    </div>

                    {/* Buttons */}

                    <Modal.Footer>
                      <Button type="submit" slot="close">
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default UpdateModal;