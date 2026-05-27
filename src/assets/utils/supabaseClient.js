import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcwotazdsikcangvdmpu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhjd290YXpkc2lrY2FuZ3ZkbXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk4NzIyMzMsImV4cCI6MjA5NTQ0ODIzM30.Gqf14WlAlEB-mt4BacbXYjaVcRiXkvFBH0IP03XMmts';

export const supabase = createClient(supabaseUrl, supabaseKey);