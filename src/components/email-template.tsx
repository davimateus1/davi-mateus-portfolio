import { Html, Heading, Text } from "@react-email/components";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const EmailTemplate = ({
  email,
  phone,
  service,
  message,
  lastName,
  firstName,
}: EmailTemplateProps) => {
  return (
    <Html lang="pt-BR">
      <Heading>Olá, Davi! Você tem uma nova mensagem de contato.</Heading>
      <Text>
        <strong>Nome:</strong> {firstName} {lastName}
      </Text>
      <Text>
        <strong>Email:</strong> {email}
      </Text>
      <Text>
        <strong>Telefone:</strong> {phone}
      </Text>
      <Text>
        <strong>Serviço:</strong> {service}
      </Text>
      <Text>
        <strong>Mensagem:</strong> {message}
      </Text>
    </Html>
  );
};
