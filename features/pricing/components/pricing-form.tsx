"use client";

import { Container } from "@/components/layouts/container";
import {
  Button,
  CustomSelect,
  Input,
  PhoneNumberInput,
  Spinner,
} from "@/components/ui";
import { Textarea } from "@/components/ui/form/textarea";
import { cn } from "@/lib/utils";
import { errorHandler } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  isPossiblePhoneNumber,
  parsePhoneNumber,
} from "react-phone-number-input";
import * as yup from "yup";

const pricingFormSchema = yup.object().shape({
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
  countryCode: yup.string().required("Country code is required"),
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
  eventDuration: yup
    .number()
    .min(1, "Event duration must be at least 1")
    .required("Event duration is required"),
  numberOfAttendees: yup.string().required("Number of attendees is required"),
  numberOfExhibitors: yup.string().required("Number of exhibitors is required"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

const LeftStar = () => (
  <svg
    width={288}
    height={380}
    viewBox="0 0 288 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-42 0L-10 169.5L-287 226.5L-10 270L23.5 380L61 270H287.5L173 187.5L208 40L47 156L-42 0Z"
      fill="#8F3600"
      fillOpacity="0.12"
    />
  </svg>
);

const RightStar = () => (
  <svg
    width={407}
    height={402}
    viewBox="0 0 407 402"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M277 24V191L0 248L277 291.5L310.5 401.5L348 291.5L586.5 248L425.5 177.5L448 0L334 177.5L277 24Z"
      fill="#8F3600"
      fillOpacity="0.12"
    />
  </svg>
);

const ATTENDEES_OPTIONS: { value: string; label: string }[] = [
  { value: "1-50", label: "1-50" },
  { value: "51-100", label: "51-100" },
  { value: "101-250", label: "101-250" },
  { value: "251-500", label: "251-500" },
  { value: "501-1000", label: "501-1000" },
  { value: "1001-2500", label: "1001-2500" },
  { value: "2501-5000", label: "2501-5000" },
  { value: "5001+", label: "5001+" },
];

const EXHIBITORS_OPTIONS: { value: string; label: string }[] = [
  { value: "1-10", label: "1-10" },
  { value: "11-25", label: "11-25" },
  { value: "26-50", label: "26-50" },
  { value: "51-100", label: "51-100" },
  { value: "101-250", label: "101-250" },
  { value: "251-500", label: "251-500" },
  { value: "501+", label: "501+" },
];

export type PricingFormData = yup.InferType<typeof pricingFormSchema>;

export const PricingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<PricingFormData>({
    resolver: yupResolver(pricingFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      countryCode: "+234",
      phoneNumber: "",
      numberOfAttendees: "",
      numberOfExhibitors: "",
      eventDuration: 1,
      message: "",
    },
  });

  const onSubmit = async (data: PricingFormData) => {
    setIsSubmitting(true);
    const formData = {
      ...data,
      phoneNumber: parsePhoneNumber(data.phoneNumber)?.number as string,
    };
    try {
      // Log form data or handle API call here
      console.log("Form submitted:", formData);
      toast.success("Thank you for your message! We'll get back to you soon.");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(errorHandler(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedPhoneNo = watch("phoneNumber");
  const watchedNumberOfAttendees = watch("numberOfAttendees");
  const watchedNumberOfExhibitors = watch("numberOfExhibitors");
  const isLoading = isSubmitting;

  return (
    <section className="w-full py-14.5 bg-warm relative overflow-hidden">
      <Container>
        <div className="absolute left-0 top-10 opacity-80 pointer-events-none ">
          <LeftStar />
        </div>
        <div className="absolute right-0 -bottom-20 opacity-80 pointer-events-none">
          <RightStar />
        </div>
        <div className="max-w-214 mx-auto relative z-10">
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

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Your email
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

              {/* Event Duration */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="eventDuration"
                  className="text-sm font-medium text-foreground"
                >
                  How long is your event (in days)?
                </label>
                <Input
                  id="eventDuration"
                  type="number"
                  step="1"
                  min="1"
                  placeholder="Event duration"
                  {...register("eventDuration")}
                  className={cn(
                    "h-12",
                    errors.eventDuration && "border-red-500",
                  )}
                />
                {errors.eventDuration && (
                  <p className="text-sm text-red-500">
                    {errors.eventDuration.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="numberOfAttendees"
                    className="text-sm font-medium text-foreground"
                  >
                    How many attendees do you expect?
                  </label>
                  <CustomSelect
                    value={watchedNumberOfAttendees}
                    placeholder="Select..."
                    options={ATTENDEES_OPTIONS}
                    handleValueChange={(value) => {
                      if (value) {
                        setValue("numberOfAttendees", value, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  {errors.numberOfAttendees && (
                    <p className="text-sm text-red-500">
                      {errors.numberOfAttendees.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="numberOfExhibitors"
                    className="text-sm font-medium text-foreground"
                  >
                    How many exhibitors do you expect?
                  </label>
                  <CustomSelect
                    value={watchedNumberOfExhibitors}
                    placeholder="Select..."
                    options={EXHIBITORS_OPTIONS}
                    handleValueChange={(value) => {
                      if (value) {
                        setValue("numberOfExhibitors", value, {
                          shouldValidate: true,
                        });
                      }
                    }}
                  />
                  {errors.numberOfExhibitors && (
                    <p className="text-sm text-red-500">
                      {errors.numberOfExhibitors.message}
                    </p>
                  )}
                </div>
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Spinner /> : "Get Quote"}
              </Button>
            </fieldset>
          </form>
        </div>
      </Container>
    </section>
  );
};
