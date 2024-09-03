-- create bucket to store figure images
insert into storage.buckets(id, name, public, file_size_limit, allowed_mime_types) values ('figure_images_bucket', 'figure_images_bucket', true, 5242880, '{"image/*"}');

-- grant update permissions to only within the user subfolder in the bucket
CREATE POLICY "Give users SELECT access to own folder 16bqzxy_0" ON storage.objects FOR SELECT TO authenticated USING (bucket_id = 'figure_images_bucket' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Give users INSERT access to own folder 16bqzxy_0" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'figure_images_bucket' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Give users UPDATE access to own folder 16bqzxy_0" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'figure_images_bucket' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "Give users DELETE access to own folder 16bqzxy_0" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'figure_images_bucket' AND auth.uid()::text = (storage.foldername(name))[1]);