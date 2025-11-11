"use client";

import { Container } from "@/components/layouts/container";
import {
  Button,
  DatePicker,
  Input,
  PhoneNumberInput,
  Spinner,
  TimePicker,
} from "@/components/ui";
import { Textarea } from "@/components/ui/form/textarea";
import { cn } from "@/lib/utils";
import { errorHandler } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { formatISO } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import * as yup from "yup";

const demoFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  company: yup.string().required("Company name is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  phoneNumber: yup
    .string()
    .trim()
    .test({
      name: "phone",
      message: "Enter a valid phone number",
      test(value, ctx) {
        if (!value) {
          return ctx.createError({
            message: "Phone number is required",
          });
        }

        return isPossiblePhoneNumber(value);
      },
    })
    .required("Phone number is required"),
  role: yup.string().required("Role is required"),
  preferredDate: yup.date().required("Preferred date is required"),
  preferredTimeSlot: yup.date().required("Preferred time slot is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export type DemoFormData = yup.InferType<typeof demoFormSchema>;

export const DemoForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<DemoFormData>({
    resolver: yupResolver(demoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phoneNumber: "",
      role: "",
      preferredDate: undefined,
      preferredTimeSlot: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    const formData = {
      ...data,
      preferredDate: data.preferredDate
        ? formatISO(data.preferredDate)
        : undefined,
      preferredTimeSlot: data.preferredTimeSlot
        ? formatISO(data.preferredTimeSlot)
        : undefined,
      phoneNumber: parsePhoneNumber(data.phoneNumber)?.number as string,
    };
    try {
      // Log form data or handle API call here
      console.log("Form submitted:", formData);
      toast.success(
        "Thank you for booking a demo! We'll get back to you soon.",
      );
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(errorHandler(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedPhoneNo = watch("phoneNumber");
  const watchedDate = watch("preferredDate");
  const watchedTime = watch("preferredTimeSlot");
  const isLoading = isSubmitting;

  return (
    <section className="w-full py-14.5 bg-background relative overflow-hidden">
      <Container>
        <div className="text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.2rem)] font-semibold text-black mb-6">
            Set up a live demo booking with us
          </h2>
          <p className="text-xl text-foreground">
            Do you have more questions or insight, please drop it using the form
            below
          </p>
        </div>

        <div className="max-w-120 mx-auto mt-22">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 mx-auto w-full"
          >
            {/* First Name and Last Name Row */}
            <fieldset className="flex flex-col gap-6" disabled={isLoading}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="firstName"
                    className="text-sm font-medium text-foreground"
                  >
                    First name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    {...register("firstName")}
                    className={cn("h-12", errors.firstName && "border-red-500")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="lastName"
                    className="text-sm font-medium text-foreground"
                  >
                    Last name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    {...register("lastName")}
                    className={cn("h-12", errors.lastName && "border-red-500")}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-foreground"
                >
                  Company name
                </label>
                <Input
                  id="company"
                  placeholder="Company name"
                  {...register("company")}
                  className={cn("h-12", errors.company && "border-red-500")}
                />
                {errors.company && (
                  <p className="text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>

              {/* Role  */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="role"
                  className="text-sm font-medium text-foreground"
                >
                  Role / Title
                </label>
                <Input
                  id="role"
                  placeholder="e.g. Marketing Manager"
                  {...register("role")}
                  className={cn("h-12", errors.role && "border-red-500")}
                />
                {errors.role && (
                  <p className="text-sm text-red-500">{errors.role.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Business email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className={cn("h-12", errors.email && "border-red-500")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Preferred Date and Time Slot Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Preferred Date
                  </label>
                  <DatePicker
                    name="preferredDate"
                    value={watchedDate}
                    placeholderText="Select date"
                    handleChange={({ value }) => {
                      setValue("preferredDate", value as Date, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.preferredDate && (
                    <p className="text-sm text-red-500">
                      {errors.preferredDate.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Preferred Time Slot
                  </label>
                  <TimePicker
                    name="preferredTimeSlot"
                    value={watchedTime}
                    placeholderText="Select time"
                    handleChange={({ value }) => {
                      setValue("preferredTimeSlot", value as Date, {
                        shouldValidate: true,
                      });
                    }}
                  />
                  {errors.preferredTimeSlot && (
                    <p className="text-sm text-red-500">
                      {errors.preferredTimeSlot.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <PhoneNumberInput
                    name="contactPhone"
                    value={watchedPhoneNo}
                    onChange={(value) => {
                      if (value) {
                        setValue("phoneNumber", value, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-sm text-red-500">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  {...register("message")}
                  className={cn(
                    "min-h-[140px] resize-none",
                    errors.message && "border-red-500",
                  )}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-[8px]"
              >
                {isSubmitting ? <Spinner /> : "Submit"}
              </Button>
            </fieldset>
          </form>
        </div>
      </Container>
    </section>
  );
};
