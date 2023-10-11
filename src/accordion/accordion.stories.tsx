import { useState } from 'react';
import { Paper } from '../paper/paper.view';
import { Accordion } from './accordion.view';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const AccordionList = () => {
  const data = [
    {
      id: 1,
      title: 'Как сменить номер телефона?',
      detail: 'Зайдите в раздел Безопасность и вход. Укажите новый номер телефона и подтвердите его.',
    },
    {
      id: 2,
      title: 'Как изменить пароль?',
      detail:
        'Для входа во многие сервисы экосистемы VK используется один пароль. Если вы беспокоитесь по поводу безопасности, этот пароль можно изменить.',
    },
    {
      id: 3,
      title: 'Как усилить защиту аккаунта?',
      detail: 'Используйте сложный пароль и регулярно меняйте его. Обновить пароль можно в разделе Пароль.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  return data.map(({ id, title, detail }) => (
    // TODO выяснить почему react не знает о свойстве open внутри e.target в onToggle
    <Accordion key={id} open={openId === id} onToggle={(e) => (e.target as HTMLDetailsElement).open && setOpenId(id)}>
      <Accordion.Summary>{title}</Accordion.Summary>
      <div style={{ padding: 15 }}>{detail}</div>
    </Accordion>
  ));
};

export const Standard: Story = {
  render: () => (
    <Paper style={{ padding: 10 }} variant="outlined">
      <AccordionList />
    </Paper>
  ),
};
