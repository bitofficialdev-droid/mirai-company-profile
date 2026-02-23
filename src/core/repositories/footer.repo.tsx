import React from "react";
import { FooterModel } from "../entities/footer/footer_model";

export const FooterRepository = {
  getFooter: (): FooterModel => {
    return {
      leading: {
        desctiption:
          "Satu platform untuk semua kebutuhan HR. Pantau kinerja tim via Web Dashboard dan berikan kemudahan akses mandiri bagi karyawan lewat aplikasi Mobile.",
        socialMedia: [
          {
            label: "X",
            url: "#",
            image: (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            ),
          },
          {
            label: "Facebook",
            url: "#",
            image: (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            ),
          },
          {
            label: "LinkedIn",
            url: "#",
            image: (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            ),
          },
          {
            label: "Instagram",
            url: "#",
            image: (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            ),
          },
          {
            label: "YouTube",
            url: "#",
            image: (
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            ),
          },
          {
            label: "TikTok",
            url: "#",
            image: (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.07 4.41-2.73 5.88-1.74 1.54-4.26 2.27-6.55 1.78-2.63-.56-4.88-2.67-5.5-5.3-.64-2.67.24-5.61 2.23-7.46 1.83-1.69 4.36-2.45 6.78-2.09v4.22c-1.05-.28-2.22-.16-3.17.41-.98.59-1.66 1.63-1.73 2.78-.08 1.18.43 2.4 1.34 3.12 1.05.82 2.53 1.05 3.82.59 1.07-.38 1.95-1.28 2.24-2.39.19-.71.2-1.46.2-2.19V.02h-1.01z" />
              </svg>
            ),
          },
        ],
      },
      features: [
        { label: "Lorem Ipsum Dolor", url: "#" },
        { label: "Consectetur Adipiscing Elit & Struktur", url: "#" },
        { label: "Sed Do Eiusemod Tempor Incididunt", url: "#" },
        { label: "Ut Labore et Dolore Magna", url: "#" },
        { label: "Quis Nostrud Exercitation Ullamco", url: "#" },
        { label: "Laboris Nisi ut Aliquip Ex", url: "#" },
        { label: "Duis Heute Irure Dolor", url: "#" },
        { label: "Reprehenderit in Voluptate", url: "#" },
        { label: "Velit Esse Cillum Dolore", url: "#" },
        { label: "Eu Fugiat Nulla Pariatur", url: "#" },
        { label: "Excepteur Sint Occaecat", url: "#" },
        { label: "Cupidatat Non Proident", url: "#" },
        { label: "Sunt in Culpa Qui", url: "#" },
        { label: "Officia Deserunt Mollit", url: "#" },
        { label: "Anim Id Est Laborum", url: "#" },
        { label: "Sed ut Perspiciatis Unde", url: "#" },
        { label: "Omnis Iste Natus Error", url: "#" },
        { label: "Sit Voluptatem Accusantium", url: "#" },
      ],
      resources: [
        { label: "Doloremque Laudantium", url: "#" },
        { label: "Totam Rem Aperiam", url: "#" },
        { label: "Eaque Ipsa Quae", url: "#" },
        { label: "Ab Illo Inventore", url: "#" },
        { label: "Veritatis et Quasi", url: "#" },
        { label: "Architecto Beatae Vitae", url: "#" },
        { label: "Dicta Sunt Explicabo", url: "#" },
        { label: "Nemo Enim Ipsam", url: "#" },
        { label: "Voluptatem Quia Voluptas", url: "#" },
        { label: "Sit Aspernatur Aut", url: "#" },
        { label: "Odit Aut Fugit", url: "#" },
      ],
      about: [
        { label: "Sed Quia Consequuntur", url: "#" },
        { label: "Magni Dolores Eos", url: "#" },
        { label: "Qui Ratione Voluptatem", url: "#" },
        { label: "Sequi Nesciunt", url: "#" },
        { label: "Neque Porro Quisquam", url: "#" },
        { label: "Est Qui Dolorem Ipsum", url: "#" },
        { label: "Quia Dolor Sit Amet", url: "#" },
        { label: "Consectetur Adipisci Velit", url: "#" },
      ],
    };
  },
};
