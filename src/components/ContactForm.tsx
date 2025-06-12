import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символa"),
  company: z.string().min(1, "Укажите название компании"),
  email: z.string().email("Некорректный email адрес"),
  phone: z.string().min(10, "Укажите корректный номер телефона"),
  service: z.string().min(1, "Выберите интересующую услугу"),
  message: z.string().min(10, "Сообщение должно содержать минимум 10 символов"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    // Симуляция отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form data:", data);
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    form.reset();
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Обсудить проект</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Имя *</FormLabel>
                  <FormControl>
                    <Input placeholder="Ваше имя" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Компания *</FormLabel>
                  <FormControl>
                    <Input placeholder="Название компании" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Телефон *</FormLabel>
                  <FormControl>
                    <Input placeholder="+7 (999) 123-45-67" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Интересующая услуга *</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="recruitment">
                      Подбор персонала
                    </SelectItem>
                    <SelectItem value="assessment">Оценка персонала</SelectItem>
                    <SelectItem value="adaptation">Адаптация</SelectItem>
                    <SelectItem value="consulting">HR-консалтинг</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Сообщение *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Расскажите подробнее о вашем проекте..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Отправляем..." : "Отправить заявку"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
