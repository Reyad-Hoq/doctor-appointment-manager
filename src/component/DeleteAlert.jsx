"use client";

import { AlertDialog, Button } from "@heroui/react";
import { refresh } from "next/cache";
import { redirect, useRouter } from "next/navigation";


const DeleteAlert = ({ item }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const { _id } = item;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointment/user/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    router.refresh();
    // redirect('/dashboard');
  };
  return (
    <AlertDialog>
      <Button className="rounded-xl bg-red-500 p-5 font-medium text-white hover:bg-red-600 text-[20px]">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Appointment?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Your Appointment</strong> and This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

  );
};

export default DeleteAlert;