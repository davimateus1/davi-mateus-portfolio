"use client";

import { z } from "zod";
import { useEffect } from "react";
import { masks } from "@/utils/mask";
import { sendEmail } from "@/actions";

import { useFormState } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  Select,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z
    .string({ required_error: "Campo obrigatório" })
    .min(3, { message: "Nome muito curto" }),
  lastName: z.string({ required_error: "Campo obrigatório" }).min(3, {
    message: "Sobrenome muito curto",
  }),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email({ message: "Email inválido" }),
  phone: z.string({ required_error: "Campo obrigatório" }).min(11, {
    message: "Telefone inválido",
  }),
  service: z.string().min(1, { message: "Selecione um serviço" }),
  message: z.string({ required_error: "Campo obrigatório" }).min(5, {
    message: "Mensagem muito curta",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const { toast } = useToast();

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    reValidateMode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false,
  });

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();

    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("service", data.service);
    formData.append("message", data.message);

    sendEmailAction(formData);
    reset();
  });

  useEffect(() => {
    if (sendEmailState.success) {
      toast({
        duration: 5000,
        variant: "success",
        title: "Email enviado com sucesso!",
        description: "Obriagdo por entrar em contato, retornarei em breve.",
      });
    }
    if (sendEmailState.error) {
      toast({
        duration: 5000,
        variant: "destructive",
        title: "Erro ao enviar email",
        description:
          "Ocorreu um erro ao enviar o email. Tente novamente mais tarde!",
      });
    }
  }, [sendEmailState, toast]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      <h3 className="text-4xl text-accent">
        Vamos criar algo incrível juntos?
      </h3>
      <p className="text-white/60">
        Estou sempre aberto a novos projetos e oportunidades. Se você tem uma
        ideia ou projeto em mente, entre em contato comigo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input
            type="text"
            className="w-full"
            placeholder="Primeiro nome"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm p-1">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="text"
            className="w-full"
            placeholder="Sobrenome"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm p-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div>
          <Input
            type="text"
            className="w-full"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm p-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            type="tel"
            className="w-full"
            placeholder="Telefone"
            {...register("phone", {
              onChange: (e) => {
                e.target.value = masks.formatPhone(e.target.value);
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm p-1">{errors.phone.message}</p>
          )}
        </div>
      </div>
      <div>
        <Controller
          name="service"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Desenvolvimento</SelectLabel>
                  <SelectItem value="Sistema">Sistema</SelectItem>
                  <SelectItem value="Website">Website</SelectItem>
                  <SelectItem value="Aplicativo">Aplicativo</SelectItem>
                  <SelectItem value="Landing Page">Landing Page</SelectItem>
                  <SelectItem value="Outros">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && (
          <p className="text-red-500 text-sm p-1">{errors.service.message}</p>
        )}
      </div>
      <div>
        <Textarea
          placeholder="Informe sua mensagem aqui"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500 text-sm p-1">{errors.message.message}</p>
        )}
      </div>
      <Button size="md" type="submit">
        Enviar mensagem
      </Button>
    </form>
  );
};
