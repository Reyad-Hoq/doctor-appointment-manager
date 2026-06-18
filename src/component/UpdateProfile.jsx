"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import toast from "react-hot-toast";
import { BiEditAlt } from "react-icons/bi";
const UpdateProfile = ({ session }) => {
  const { id, name, email, image, phone } = session?.user;
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.updateUser(updatedData);

    if (error) {
      toast.error(error.message)
      return;
    }
    data && toast.success('Profile updated successfully')
  };
  return (
    <Modal>
      <Button variant="secondary" className="rounded-xl bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700">Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-sm">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <BiEditAlt className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Info</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update your name and photo
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                  <TextField
                    defaultValue={name}
                    className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input placeholder="Update your name" />
                  </TextField>

                  <TextField
                    defaultValue={image}
                    className="w-full" name="image" type="tel" variant="secondary">
                    <Label>Photo URL</Label>
                    <Input placeholder="Update your photo URL" />
                  </TextField>
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type='submit' slot="close">Update</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateProfile;