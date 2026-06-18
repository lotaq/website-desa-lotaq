import { defineCollection, z } from 'astro:content';

const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    judul: z.string(),
    tanggal: z.date(),
    kategori: z.enum(['Pemerintahan', 'Pertanian', 'Perkebunan', 'Perikanan', 'Wisata', 'UMKM', 'Pembangunan', 'Sosial Budaya', 'Pendidikan', 'Kesehatan', 'PKK', 'Teknologi', 'Pemberdayaan']),
    gambarUtama: z.string(),
    gambarUtamaAlt: z.string(),
    ringkasan: z.string().max(200),
    penulis: z.string().default('Redaksi Kampung Lotaq'),
    lokasi: z.string().optional(),
    galeri: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  'berita': beritaCollection
};
