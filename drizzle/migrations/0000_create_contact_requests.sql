-- Ziyaretçilerin iletişim ve hizmet talepleri
create table public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  service_type text not null default 'diger',
  budget text,
  message text not null,
  created_at timestamptz not null default now()
);

-- Form verileri yalnızca sunucu tarafından (service_role) yazılır ve okunur
grant all on public.contact_requests to service_role;

alter table public.contact_requests enable row level security;