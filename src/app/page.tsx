"use client";

import { Body, Subtitle, Title } from "@/components/UI/Typography";
import { Chip } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4 md:p-24 bg-light dark:bg-dark ">
      <div className="p-2 w-full rounded-xl flex flex-col items-center justify-center py-8 shadow-secondary shadow-complete gap-6">
        <Title gradient>Side Projects</Title>
        <Body>This is a template to create Next.js apps.</Body>
        <Subtitle color="secondary">Colors:</Subtitle>
        <div className="flex gap-2 flex-wrap justify-center">
          <Chip color="primary">Primary</Chip>
          <Chip color="secondary">Secondary</Chip>
          <Chip color="success">Success</Chip>
          <Chip color="warning">Warning</Chip>
          <Chip color="danger">Danger</Chip>
        </div>
      </div>
    </main>
  );
}
