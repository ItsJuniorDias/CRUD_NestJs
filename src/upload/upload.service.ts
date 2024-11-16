import { Injectable } from "@nestjs/common";
import { FileDTO } from "./dtos/upload.dto";
import { createClient } from "@supabase/supabase-js";

@Injectable()
export class UploadService {
  async upload(file: FileDTO) {
    const supabaseURL = "https://cjjnfchseuqdwitoncaq.supabase.co";
    const supaseKEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqam5mY2hzZXVxZHdpdG9uY2FxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTc4NzUwOSwiZXhwIjoyMDQ3MzYzNTA5fQ.0szm8OABRfc-Y5y_ljxJtZ4m3hPz701RjFlncAl-klg";

    const supabase = createClient(supabaseURL, supaseKEY, {
      auth: {
        persistSession: false,
      },
    });

    const data = await supabase.storage
      .from("files")
      .upload(file.originalname, file.buffer, {
        upsert: true,
      });

    return data;
  }
}
