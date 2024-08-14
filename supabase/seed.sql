SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '007dd158-44f7-4550-b1b4-c493662c9593', '{"action":"user_confirmation_requested","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-06-28 02:27:59.019224+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e53d8d9c-4310-4e0a-8a05-bcfbe8e845e0', '{"action":"user_signedup","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-06-28 02:28:08.769104+00', ''),
	('00000000-0000-0000-0000-000000000000', '2de14a89-9f40-484c-b3e3-a87b81290f6e', '{"action":"login","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-28 02:28:33.845096+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e70e9215-c294-485d-bfaf-cab6801fb459', '{"action":"user_confirmation_requested","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-07-13 14:26:05.83666+00', ''),
	('00000000-0000-0000-0000-000000000000', '8da45b3d-ba49-49c2-acd5-915c7f043336', '{"action":"user_signedup","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-07-13 14:26:22.241709+00', ''),
	('00000000-0000-0000-0000-000000000000', '24b5a411-b83b-4b16-a195-886d9468fd3b', '{"action":"login","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-13 14:28:18.249391+00', ''),
	('00000000-0000-0000-0000-000000000000', '58264ef1-e0c0-49d6-8cc9-66b27b57a845', '{"action":"login","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-13 15:24:59.747125+00', ''),
	('00000000-0000-0000-0000-000000000000', '8289f4d2-dd4f-4151-8517-932b6ac5cc6c', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-13 15:28:47.63835+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f5624c8-7882-4edc-a996-634210b4c053', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-13 15:28:47.639123+00', ''),
	('00000000-0000-0000-0000-000000000000', '4dbca11d-e2fd-4030-a47e-6dc69189e951', '{"action":"logout","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-13 15:40:13.315347+00', ''),
	('00000000-0000-0000-0000-000000000000', '85fb94d8-aed9-442c-a3ad-113e1ac9218b', '{"action":"login","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-13 15:41:03.381341+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d3cec59-777e-4d58-8a08-576c62ea07f9', '{"action":"logout","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-13 16:13:44.835968+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b248d506-df09-4e4d-8a4f-256b09c2f288', '{"action":"login","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-13 16:13:54.403396+00', ''),
	('00000000-0000-0000-0000-000000000000', '9616218a-bb59-462a-beef-b3baa1679bb6', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-13 16:48:48.581371+00', ''),
	('00000000-0000-0000-0000-000000000000', '74489280-37a0-46ad-96a8-509c2a387cfe', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-13 16:48:48.582689+00', ''),
	('00000000-0000-0000-0000-000000000000', '0c109c0e-0bb2-444a-a41e-84a3fa181ed5', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 18:34:03.978916+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aaa671c9-8bb2-45cf-a251-5f494b8a132c', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 18:34:03.988027+00', ''),
	('00000000-0000-0000-0000-000000000000', '26192441-4ffb-4751-9917-a5cedfcb945c', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 18:34:07.509059+00', ''),
	('00000000-0000-0000-0000-000000000000', '5456aefd-df92-4fcf-89e0-cb44fc87a8b0', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 19:37:27.30225+00', ''),
	('00000000-0000-0000-0000-000000000000', '187cf199-0003-4655-925d-e9af4b576808', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 19:37:27.30398+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a85ecee1-c294-4bc2-a56d-67c979053a35', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 19:37:27.525695+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e13af7c-12c0-403d-947d-50c297c80292', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 20:37:35.226082+00', ''),
	('00000000-0000-0000-0000-000000000000', '7ba1b8d7-79fd-4253-9f33-d6f8a93bb6ef', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 20:37:35.227732+00', ''),
	('00000000-0000-0000-0000-000000000000', '1318b415-ac38-4c43-a263-4760903ca25b', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 20:37:35.2507+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e92b47c4-835a-4eb4-9fec-f75d9dab45f0', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 21:43:39.293009+00', ''),
	('00000000-0000-0000-0000-000000000000', '003d3763-102a-4966-b851-1100de71eaa7', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 21:43:39.294162+00', ''),
	('00000000-0000-0000-0000-000000000000', '06536f92-138e-47de-85ba-01c0ca3add99', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 21:43:39.312859+00', ''),
	('00000000-0000-0000-0000-000000000000', '58e9cbdc-d47b-4d70-99de-aae270670573', '{"action":"token_refreshed","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 23:02:00.696622+00', ''),
	('00000000-0000-0000-0000-000000000000', '529015f0-07cc-40ce-bd95-2ff9eeeea72f', '{"action":"token_revoked","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-14 23:02:00.697393+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ccc2d66-00c9-4724-9dce-03f9be0823dc', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 00:35:25.598548+00', ''),
	('00000000-0000-0000-0000-000000000000', '29c2542a-6da6-4555-bc40-58de1d90ca3b', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 00:35:25.600394+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ed8fe9ce-9517-4527-84e5-9ba5ce55b65f', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 00:35:29.284452+00', ''),
	('00000000-0000-0000-0000-000000000000', 'da8e0381-1ac3-471c-9269-bf89ce763857', '{"action":"user_confirmation_requested","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-07-15 01:01:59.784511+00', ''),
	('00000000-0000-0000-0000-000000000000', '1430ae8a-9689-4801-8ca7-a3cb3299b464', '{"action":"user_signedup","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"team"}', '2024-07-15 01:02:33.64348+00', ''),
	('00000000-0000-0000-0000-000000000000', '589e8437-670d-4dbe-9901-f72d4f149ff3', '{"action":"login","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-15 01:02:46.560647+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7288746-e1a8-4d4b-bea6-9a34cb447c23', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 03:31:34.190828+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d3dca02-99ca-44ed-bb94-8ebf444b0063', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 03:31:34.193275+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce7faeac-a38c-4225-af14-209bda7e5c9e', '{"action":"token_refreshed","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 06:19:53.854751+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd81b89d2-0b66-47a8-bea1-1f9c8bea5758', '{"action":"token_revoked","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 06:19:53.858415+00', ''),
	('00000000-0000-0000-0000-000000000000', '28c3eb5f-8db6-46c3-8c0e-e55e43d48242', '{"action":"logout","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-15 06:20:01.481633+00', ''),
	('00000000-0000-0000-0000-000000000000', '9881d2ce-ac6a-4ea9-b911-5c16e85eed3f', '{"action":"token_refreshed","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 13:06:44.101112+00', ''),
	('00000000-0000-0000-0000-000000000000', '6405d4b5-0fab-429b-9db8-f29ce5a7ae26', '{"action":"token_revoked","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 13:06:44.10261+00', ''),
	('00000000-0000-0000-0000-000000000000', '42f6f914-058a-4688-b2b3-1ca10ed173c2', '{"action":"logout","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-15 13:23:30.592664+00', ''),
	('00000000-0000-0000-0000-000000000000', '7dfd6e5b-af69-4db0-a90a-23ef20ad3638', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 13:23:39.468417+00', ''),
	('00000000-0000-0000-0000-000000000000', '2525515f-6019-47ea-874f-6a9cc752af76', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-15 13:23:39.468974+00', ''),
	('00000000-0000-0000-0000-000000000000', '2050a52c-f044-4cba-b06f-017acd9b3537', '{"action":"user_confirmation_requested","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"user","traits":{"provider":"email"}}', '2024-07-15 13:23:57.533138+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce078b0d-5de2-48b1-8ae7-6bf1bbcf1cba', '{"action":"user_signedup","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"team"}', '2024-07-15 13:24:22.020007+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc631081-c5d9-4334-bd2c-19533e1e0ac0', '{"action":"login","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-15 13:26:36.186742+00', ''),
	('00000000-0000-0000-0000-000000000000', '88e5d0ec-ff3c-41cb-a7e6-5769509daa04', '{"action":"login","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-15 13:49:15.954458+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ec84bbb8-70ba-4438-b02f-2d4f36e3a900', '{"action":"login","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-15 19:51:11.672739+00', ''),
	('00000000-0000-0000-0000-000000000000', '7a4d71a8-2586-4a6d-bbcf-d7815fcdd091', '{"action":"token_refreshed","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-18 20:24:09.422604+00', ''),
	('00000000-0000-0000-0000-000000000000', '52ca9ae2-d9bb-4160-81a5-38326ebba8af', '{"action":"token_revoked","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-18 20:24:09.430421+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba794418-d7d8-4df0-b0ae-f79b1971d95e', '{"action":"login","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-18 20:47:12.369674+00', ''),
	('00000000-0000-0000-0000-000000000000', '58b2e5dd-4905-45e0-892a-6748253efc39', '{"action":"login","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-18 21:39:06.918617+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd05272d0-3193-45af-b43e-3eb3c1e1cd2c', '{"action":"token_refreshed","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-18 23:14:57.24991+00', ''),
	('00000000-0000-0000-0000-000000000000', '304c1c2c-e328-416b-8f76-9a76c4ce724b', '{"action":"token_revoked","actor_id":"9001e5a0-99d0-4a3d-b148-a22f6bcaac8e","actor_username":"philipchanhk626@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-07-18 23:14:57.252283+00', ''),
	('00000000-0000-0000-0000-000000000000', '7f552a86-7723-4450-afe5-ec2241f97a11', '{"action":"token_refreshed","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"token"}', '2024-07-19 22:52:15.054058+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edbf5de2-0656-4b4c-a963-630a09ba3b60', '{"action":"token_revoked","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"token"}', '2024-07-19 22:52:15.062461+00', ''),
	('00000000-0000-0000-0000-000000000000', '9f382c6e-62fb-4639-9a94-8dde1ef4c837', '{"action":"login","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-24 00:04:04.274849+00', ''),
	('00000000-0000-0000-0000-000000000000', '5e42e8c5-f1e0-42a1-a7d9-a7c5831ec22f', '{"action":"token_refreshed","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"token"}', '2024-07-29 19:45:03.364388+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd474d917-1e94-4ee2-a7e4-e536a7ba1f76', '{"action":"token_revoked","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"token"}', '2024-07-29 19:45:03.371728+00', ''),
	('00000000-0000-0000-0000-000000000000', '69a39d50-125b-42d8-b318-784df8c8af66', '{"action":"logout","actor_id":"b8c8a087-5839-4f94-8a2b-a9d5d1610a3d","actor_username":"napon@napontaratan.com","actor_via_sso":false,"log_type":"account"}', '2024-07-29 19:45:09.281573+00', ''),
	('00000000-0000-0000-0000-000000000000', '6246db59-0ec3-44ba-b642-bf6b641dad81', '{"action":"login","actor_id":"99d45582-8940-4f09-b970-80c78f55aef5","actor_username":"napontaratan@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-29 19:45:17.700937+00', ''),
	('00000000-0000-0000-0000-000000000000', '3bb8bf1f-0673-47d3-91f6-ee981be664d4', '{"action":"login","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-31 00:51:08.396851+00', ''),
	('00000000-0000-0000-0000-000000000000', '0273da96-1f06-4986-bddd-67a79cbaca11', '{"action":"logout","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-07-31 01:24:24.004278+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f06063db-109e-4cb1-98fd-fa5428e79852', '{"action":"login","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-07-31 01:28:10.376853+00', ''),
	('00000000-0000-0000-0000-000000000000', '645409aa-da91-4d2b-abce-c24b741f02fa', '{"action":"token_refreshed","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-01 18:54:22.66251+00', ''),
	('00000000-0000-0000-0000-000000000000', 'eb174346-d7da-45bb-b3fb-ec0f36301257', '{"action":"token_revoked","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-01 18:54:22.665837+00', ''),
	('00000000-0000-0000-0000-000000000000', '133c6893-c827-40e4-8af8-9ba530926d9c', '{"action":"token_refreshed","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-01 23:00:36.422646+00', ''),
	('00000000-0000-0000-0000-000000000000', 'edad1dea-ed1c-4726-b743-86c0732b338e', '{"action":"token_revoked","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-01 23:00:36.423874+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f18c8351-71b8-4307-b42d-a26bc7a5f40a', '{"action":"token_refreshed","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 01:37:36.737955+00', ''),
	('00000000-0000-0000-0000-000000000000', 'badc6b92-5788-4eb1-aa02-7ac91af3440a', '{"action":"token_revoked","actor_id":"ef17ca4b-e79d-4f88-9b14-77ecbb26a66f","actor_username":"brianhui94@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-08-02 01:37:36.739886+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."flow_state" ("id", "user_id", "auth_code", "code_challenge_method", "code_challenge", "provider_type", "provider_access_token", "provider_refresh_token", "created_at", "updated_at", "authentication_method", "auth_code_issued_at") VALUES
	('cf4dc20d-57f3-46b6-9b6a-98b2cc2ef91e', '99d45582-8940-4f09-b970-80c78f55aef5', '43a0bfe2-1845-4ac2-89e3-535e4d715d87', 's256', 'mT0W6oFBBf8EUuvRoQjD960NJ9Ml5NjzEzqMKd-vlP8', 'email', '', '', '2024-06-28 02:27:59.0218+00', '2024-06-28 02:28:08.775446+00', 'email/signup', '2024-06-28 02:28:08.775407+00'),
	('820aaca4-1b7f-4a74-b5ce-43e8f5db160b', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '3615edc4-7daa-4518-b1ca-7c17b5846c87', 's256', 'Jc7vuhCu53O1LoqFNx1SatDusdgj9ILd5YvBmhWi84k', 'email', '', '', '2024-07-13 14:26:05.840201+00', '2024-07-13 14:26:22.249635+00', 'email/signup', '2024-07-13 14:26:22.249597+00'),
	('f4a9789f-ec6f-435a-9b55-895250097032', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', 'f5dab976-9f8e-41cc-8aa5-2e822180c121', 's256', '7iZllGVv255D4G5JmE3wlIY6ipLVOxPivc_jVBg7_Ts', 'email', '', '', '2024-07-15 01:01:59.786027+00', '2024-07-15 01:02:33.650325+00', 'email/signup', '2024-07-15 01:02:33.65029+00'),
	('44313a32-dc49-4778-a6da-0e391123f363', 'b8c8a087-5839-4f94-8a2b-a9d5d1610a3d', '2fc58ac6-91bc-4f1a-860f-90194f385339', 's256', '40K03JSPvDqefF_iANhm8PkKrGWTmMEH5YsZe7qZLls', 'email', '', '', '2024-07-15 13:23:57.533741+00', '2024-07-15 13:24:22.027844+00', 'email/signup', '2024-07-15 13:24:22.027805+00');


--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '99d45582-8940-4f09-b970-80c78f55aef5', 'authenticated', 'authenticated', 'napontaratan@gmail.com', '$2a$10$s3YZK2i9YIJUtNXCsdr8MurnA1EV9Y8V4JFsXUvVoNNwPpvx51eYq', '2024-06-28 02:28:08.77063+00', NULL, '', '2024-06-28 02:27:59.025662+00', '', NULL, '', '', NULL, '2024-07-29 19:45:17.701684+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "99d45582-8940-4f09-b970-80c78f55aef5", "email": "napontaratan@gmail.com", "email_verified": false, "phone_verified": false}', NULL, '2024-06-28 02:27:58.993471+00', '2024-07-29 19:45:17.703529+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', 'authenticated', 'authenticated', 'brianhui94@gmail.com', '$2a$10$0HhmRPDSzXOlN5fMruToAeeLJWOLAULwMubWQZEccGzF82DK2rmGq', '2024-07-15 01:02:33.643996+00', NULL, '', '2024-07-15 01:01:59.792151+00', '', NULL, '', '', NULL, '2024-07-31 01:28:10.378444+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "ef17ca4b-e79d-4f88-9b14-77ecbb26a66f", "email": "brianhui94@gmail.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-15 01:01:59.775192+00', '2024-08-02 01:37:36.743699+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', 'authenticated', 'authenticated', 'philipchanhk626@gmail.com', '$2a$10$AzW94K/j.USTZ1iqvlhh1.edc6Ik0m1QpbboPtfKsG8WbTMXgNt8C', '2024-07-13 14:26:22.242231+00', NULL, '', '2024-07-13 14:26:05.851241+00', '', NULL, '', '', NULL, '2024-07-18 21:39:06.92021+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "9001e5a0-99d0-4a3d-b148-a22f6bcaac8e", "email": "philipchanhk626@gmail.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-13 14:26:05.806705+00', '2024-07-18 23:14:57.255011+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'b8c8a087-5839-4f94-8a2b-a9d5d1610a3d', 'authenticated', 'authenticated', 'napon@napontaratan.com', '$2a$10$hb2BJG3GzNWKqW73wUzBr.1scDHm9xBmoyvpKx1BaHmXmnd.7Tfvi', '2024-07-15 13:24:22.02054+00', NULL, '', '2024-07-15 13:23:57.54081+00', '', NULL, '', '', NULL, '2024-07-15 13:26:36.193451+00', '{"provider": "email", "providers": ["email"]}', '{"sub": "b8c8a087-5839-4f94-8a2b-a9d5d1610a3d", "email": "napon@napontaratan.com", "email_verified": false, "phone_verified": false}', NULL, '2024-07-15 13:23:57.511769+00', '2024-07-29 19:45:03.381252+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('99d45582-8940-4f09-b970-80c78f55aef5', '99d45582-8940-4f09-b970-80c78f55aef5', '{"sub": "99d45582-8940-4f09-b970-80c78f55aef5", "email": "napontaratan@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-28 02:27:59.013851+00', '2024-06-28 02:27:59.013902+00', '2024-06-28 02:27:59.013902+00', '4378951a-66f5-4f90-a8ad-f66d735c2f37'),
	('9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '{"sub": "9001e5a0-99d0-4a3d-b148-a22f6bcaac8e", "email": "philipchanhk626@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-13 14:26:05.832091+00', '2024-07-13 14:26:05.83214+00', '2024-07-13 14:26:05.83214+00', '61b4f65f-86cc-4da3-a56e-43a6330c3de3'),
	('ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', '{"sub": "ef17ca4b-e79d-4f88-9b14-77ecbb26a66f", "email": "brianhui94@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-15 01:01:59.780229+00', '2024-07-15 01:01:59.780285+00', '2024-07-15 01:01:59.780285+00', '81c1a3ba-fc9e-451e-bd16-0bcb52a6693c'),
	('b8c8a087-5839-4f94-8a2b-a9d5d1610a3d', 'b8c8a087-5839-4f94-8a2b-a9d5d1610a3d', '{"sub": "b8c8a087-5839-4f94-8a2b-a9d5d1610a3d", "email": "napon@napontaratan.com", "email_verified": false, "phone_verified": false}', 'email', '2024-07-15 13:23:57.529852+00', '2024-07-15 13:23:57.52991+00', '2024-07-15 13:23:57.52991+00', '5f233fdd-7cd5-4a1b-a9aa-d94b615f973d');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('392a6345-4237-4878-ae24-08644c324443', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '2024-07-13 14:28:18.250306+00', '2024-07-15 13:23:39.476367+00', NULL, 'aal1', NULL, '2024-07-15 13:23:39.476302', 'Next.js Middleware', '72.66.118.82', NULL),
	('b175e373-9331-49df-9776-132d1d8e0f30', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '2024-07-18 20:47:12.374916+00', '2024-07-18 20:47:12.374916+00', NULL, 'aal1', NULL, NULL, 'node', '34.205.72.223', NULL),
	('bdafaee1-db36-4f95-bf21-1acd53ebadd4', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '2024-07-18 21:39:06.920283+00', '2024-07-18 21:39:06.920283+00', NULL, 'aal1', NULL, NULL, 'node', '34.229.170.215', NULL),
	('48f4362a-f7b4-4a78-a4e7-2a76d0d54193', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '2024-07-15 13:49:15.967887+00', '2024-07-18 23:14:57.256908+00', NULL, 'aal1', NULL, '2024-07-18 23:14:57.256841', 'Vercel Edge Functions', '2a06:98c0:3600::103', NULL),
	('4a78a8bd-4826-459a-84eb-d5b1363c35c2', '99d45582-8940-4f09-b970-80c78f55aef5', '2024-07-29 19:45:17.701772+00', '2024-07-29 19:45:17.701772+00', NULL, 'aal1', NULL, NULL, 'node', '54.175.215.197', NULL),
	('0ce2b6d6-0792-45a3-8bfa-714eac4b8540', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', '2024-07-31 01:28:10.378516+00', '2024-08-02 01:37:36.744948+00', NULL, 'aal1', NULL, '2024-08-02 01:37:36.744877', 'Next.js Middleware', '162.156.68.131', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('392a6345-4237-4878-ae24-08644c324443', '2024-07-13 14:28:18.267555+00', '2024-07-13 14:28:18.267555+00', 'password', '64ff27a4-636e-4f8f-ab5a-e957a9413dd7'),
	('48f4362a-f7b4-4a78-a4e7-2a76d0d54193', '2024-07-15 13:49:15.976376+00', '2024-07-15 13:49:15.976376+00', 'password', 'bafbbed4-0208-4999-9ade-925a47f232f4'),
	('b175e373-9331-49df-9776-132d1d8e0f30', '2024-07-18 20:47:12.382374+00', '2024-07-18 20:47:12.382374+00', 'password', '5e5f58dd-2f71-414d-be7c-840e40c414d7'),
	('bdafaee1-db36-4f95-bf21-1acd53ebadd4', '2024-07-18 21:39:06.925731+00', '2024-07-18 21:39:06.925731+00', 'password', 'bd6e744f-5782-4523-a89d-e6b959aa20b9'),
	('4a78a8bd-4826-459a-84eb-d5b1363c35c2', '2024-07-29 19:45:17.703812+00', '2024-07-29 19:45:17.703812+00', 'password', 'b25c8532-e741-4036-ab84-2459202cf6ce'),
	('0ce2b6d6-0792-45a3-8bfa-714eac4b8540', '2024-07-31 01:28:10.385351+00', '2024-07-31 01:28:10.385351+00', 'password', '15d8ff14-bb56-4ee7-bf03-91b62ea4cf9c');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 2, 'zn3jPFdtSUuiQQLE8kwawQ', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-13 14:28:18.256207+00', '2024-07-13 15:28:47.639619+00', NULL, '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 4, 'Iw3N0OSx36Btxwll3riakw', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-13 15:28:47.640232+00', '2024-07-13 16:48:48.583202+00', 'zn3jPFdtSUuiQQLE8kwawQ', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 7, 'kmxSXDH_QCFNGfYSAvHz7w', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-13 16:48:48.58427+00', '2024-07-14 18:34:03.988572+00', 'Iw3N0OSx36Btxwll3riakw', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 8, 'bnGiQvmb-K8B_8C5sQSjsg', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-14 18:34:03.994161+00', '2024-07-14 19:37:27.304504+00', 'kmxSXDH_QCFNGfYSAvHz7w', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 9, 'h01fvKWlLh9zC4badzFhlw', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-14 19:37:27.305642+00', '2024-07-14 20:37:35.228242+00', 'bnGiQvmb-K8B_8C5sQSjsg', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 10, 'ZOSi1JlyLr6QbZGOX017cA', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-14 20:37:35.228828+00', '2024-07-14 21:43:39.29495+00', 'h01fvKWlLh9zC4badzFhlw', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 11, 'XhE_BrA0F09-6Dv1dttI4g', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-14 21:43:39.295806+00', '2024-07-15 00:35:25.600907+00', 'ZOSi1JlyLr6QbZGOX017cA', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 13, 'dYFu215ucPnSU8sUmDn9kQ', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-15 00:35:25.602148+00', '2024-07-15 03:31:34.193786+00', 'XhE_BrA0F09-6Dv1dttI4g', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 15, '6pMXJz--5okdWgUjBls3CA', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-15 03:31:34.19543+00', '2024-07-15 13:23:39.469481+00', 'dYFu215ucPnSU8sUmDn9kQ', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 18, 'CkM6Y_T1xzbKUDDjs8HedQ', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', false, '2024-07-15 13:23:39.474227+00', '2024-07-15 13:23:39.474227+00', '6pMXJz--5okdWgUjBls3CA', '392a6345-4237-4878-ae24-08644c324443'),
	('00000000-0000-0000-0000-000000000000', 23, '52r3uJmixljRNCux-uTrUg', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', false, '2024-07-18 20:47:12.378236+00', '2024-07-18 20:47:12.378236+00', NULL, 'b175e373-9331-49df-9776-132d1d8e0f30'),
	('00000000-0000-0000-0000-000000000000', 24, 'camLqME2dbJWuQ9H02nyNg', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', false, '2024-07-18 21:39:06.922981+00', '2024-07-18 21:39:06.922981+00', NULL, 'bdafaee1-db36-4f95-bf21-1acd53ebadd4'),
	('00000000-0000-0000-0000-000000000000', 20, 'oozSfJ1Dl8_xQvIrGCyacQ', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', true, '2024-07-15 13:49:15.970341+00', '2024-07-18 23:14:57.252759+00', NULL, '48f4362a-f7b4-4a78-a4e7-2a76d0d54193'),
	('00000000-0000-0000-0000-000000000000', 25, 'x-BXW_Y5Hd9cenxI32Irkg', '9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', false, '2024-07-18 23:14:57.25401+00', '2024-07-18 23:14:57.25401+00', 'oozSfJ1Dl8_xQvIrGCyacQ', '48f4362a-f7b4-4a78-a4e7-2a76d0d54193'),
	('00000000-0000-0000-0000-000000000000', 29, 'WRbez9bw04pEBHDjCl6kCQ', '99d45582-8940-4f09-b970-80c78f55aef5', false, '2024-07-29 19:45:17.702612+00', '2024-07-29 19:45:17.702612+00', NULL, '4a78a8bd-4826-459a-84eb-d5b1363c35c2'),
	('00000000-0000-0000-0000-000000000000', 31, 'tBASyutFzVkzb6zSsnkHuA', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', true, '2024-07-31 01:28:10.380207+00', '2024-08-01 18:54:22.666362+00', NULL, '0ce2b6d6-0792-45a3-8bfa-714eac4b8540'),
	('00000000-0000-0000-0000-000000000000', 32, 'oln3riPEzJDmmsNpeoTCCg', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', true, '2024-08-01 18:54:22.672151+00', '2024-08-01 23:00:36.424342+00', 'tBASyutFzVkzb6zSsnkHuA', '0ce2b6d6-0792-45a3-8bfa-714eac4b8540'),
	('00000000-0000-0000-0000-000000000000', 33, 'GtlCJXMKE1kxTvK97Xz2fA', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', true, '2024-08-01 23:00:36.428547+00', '2024-08-02 01:37:36.740386+00', 'oln3riPEzJDmmsNpeoTCCg', '0ce2b6d6-0792-45a3-8bfa-714eac4b8540'),
	('00000000-0000-0000-0000-000000000000', 34, 'IICo5w9084fWcUaiIx8S7Q', 'ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', false, '2024-08-02 01:37:36.742647+00', '2024-08-02 01:37:36.742647+00', 'GtlCJXMKE1kxTvK97Xz2fA', '0ce2b6d6-0792-45a3-8bfa-714eac4b8540');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."profiles" ("id", "created_at", "first_name", "last_name", "email") VALUES
	('9001e5a0-99d0-4a3d-b148-a22f6bcaac8e', '2024-07-15 13:22:40.54031+00', NULL, NULL, 'philipchanhk626@gmail.com'),
	('99d45582-8940-4f09-b970-80c78f55aef5', '2024-07-15 13:22:56.515278+00', NULL, NULL, 'napontaratan@gmail.com'),
	('ef17ca4b-e79d-4f88-9b14-77ecbb26a66f', '2024-07-15 13:23:14.116285+00', NULL, NULL, 'brianhui94@gmail.com'),
	('b8c8a087-5839-4f94-8a2b-a9d5d1610a3d', '2024-07-15 13:23:57.505823+00', NULL, NULL, 'napon@napontaratan.com');


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: citations; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: journals; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."journals" ("id", "created_at", "sections", "styling_requirements", "abstract_limit", "body_limit", "tables_figures_limit", "references_limit", "name") VALUES
	(1, '2024-07-15 20:35:05.576854+00', '{Abstract,Introduction,"Materials/Subjects and Methods",Results,Discussion,Acknowledgements,"Author Contributions","Competing Interests","Data Availability Statement",References,Tables,"Figure Legends",Figures,"Supplementary Information","Video Summaries","Subject Ontology"}', '- Text should be double spaced with a wide margin.
- All pages and lines are to be numbered.
- Do not make rules thinner than 1pt (0.36mm).
- Use a coarse hatching pattern rather than shading for tints in graphs.
- Colour should be distinct when being used as an identifying tool.
- Spaces, not commas should be used to separate thousands.
- At first mention of a manufacturer, the town (and state if USA) and country should be provided.
- Statistical methods: For normally distributed data, mean (SD) is the preferred summary statistic. Relative risks should be expressed as odds ratios with 95% confidence interval. To compare two methods for measuring a variable the method of Bland & Altman (1986, Lancet 1, 307–310) should be used; for this, calculation of P only is not appropriate.
- Units: Use metric units (SI units) as fully as possible. Preferably give measurements of energy in kiloJoules or MegaJoules with kilocalories in parentheses (1 kcal = 4.186kJ). Use % throughout.
- Abbreviations: On first using an abbreviation place it in parentheses after the full item. Very common abbreviations such as FFA, RNA, need not be defined. Note these abbreviations: gram g; litre l; milligram mg; kilogram kg; kilojoule kJ; megajoule MJ; weight wt; seconds s; minutes min; hours h. Do not add ‘s’ for plural units.  Terms used less than four times should not be abbreviated.', 200, 4000, 8, 60, 'Leukemia');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 34, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: citation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

-- SELECT pg_catalog.setval('"public"."citation_id_seq"', 1, false);


--
-- Name: documents_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."documents_id_seq"', 1, false);


--
-- Name: journals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."journals_id_seq"', 1, true);


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."projects_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
