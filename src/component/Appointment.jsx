'use client';
import React, { useState } from 'react';
import { Button, Card, DateField, Description, FieldError, Input, Label, ListBox, Select, TextField } from "@heroui/react";
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const Appointment = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [gender, setGender] = useState(null);
  const [phone, setPhone] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  const handleAppointment = async () => {
    const { _id, name, specialty } = doctor;
    const appointmentData = {
      userId: user?.id,
      patientName: user?.name,
      userEmail: user?.email,
      doctorId: _id,
      doctorName: name,
      specialty,
      gender,
      phone,
      appointmentDate: new Date(appointmentDate),
      appointmentTime,
    }
    console.log(appointmentData)
    const res = await fetch('http://localhost:8000/appointment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',

      },
      body: JSON.stringify(appointmentData),
    })
    const data = await res.json();
    toast.success('Your appointment booked Successfully')
  }


  return (
    <div>
      <Card className="bg-white mt-8 rounded-3xl shadow-lg p-8 text-center">

        <h2 className="text-3xl font-bold text-slate-900 mb-5">
          About Doctor
        </h2>

        <p className="text-slate-600 leading-8">
          {doctor.description}
        </p>
        <div className="flex flex-col md:flex-row justify-between space-y-1">
          <div className="md:col-span-2">
            <TextField
              onChange={setAppointmentDate}
              name="appointmentDate"
              type="date"
              isRequired
            >
              <Label>Appointment Date</Label>
              <Input type="date" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <Select onChange={setAppointmentTime} className="w-[256px]" placeholder="Select one" isRequired>
            <Label>Time</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {
                  doctor.availability.map((time, ind) =>
                    <ListBox.Item key={ind} id={time} textValue={time}>
                      {time}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  )
                }
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField onChange={setPhone} isRequired className="w-full max-w-64 text-start" name="phone">
            <Label>Phone Number</Label>
            <Input type='number' placeholder="017XXXXXXXX" />
          </TextField>
          <Select onChange={setGender} className="w-[256px]" placeholder="Select one" isRequired>
            <Label>Gender</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="male" textValue="Male">
                  Male
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="female" textValue="Female">
                  Female
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div>
          <Button
            onClick={handleAppointment}
            variant='primary'
            className=' w-full bg-blue-600 hover:bg-blue-500 transition-normal'
          >
            Book Appointment
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Appointment;