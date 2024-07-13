# Script

[Website](tryscript.vercel.app)

[Supabase Project](https://supabase.com/dashboard/project/gwaoosxcrdzjmvevkakm)

## Run the app locally

1. Sign up for Supabase and make sure you have access to our Supabase [project](https://supabase.com/dashboard/project/gwaoosxcrdzjmvevkakm)

1. Clone this repository and install dependencies

   ```bash
   npm install
   ```

1. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   ```

   Both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` can be found in [the Supabase project's API settings](https://supabase.com/dashboard/project/gwaoosxcrdzjmvevkakm/settings/api)

1. You can now run the Next.js local development server:
   ```bash
   npm run dev
   ```

The application should now be running on [localhost:3000](http://localhost:3000/).

## Pointing your environment to a local version of Supabase

Generally this is needed when you want to test out your db schema changes without impacting the actual Supabase instance.

1. Make sure you have [Docker](https://www.docker.com/) installed
1. Install Supabase CLI for your [platform](https://supabase.com/docs/guides/cli/getting-started)
1. In the project folder, login to supabase
   ```bash
   supabase login
   ```
1. Link the local db to the remote one. The DB password can be found on Trello board under (Email/Credentials Master List)
   ```bash
   supabase link --project-ref gwaoosxcrdzjmvevkakm
   ```
1. Start supabase
   ```bash
   supabase start
   ```
1. The local instance of supabase is now running on your machine. You'll see output containing your local Supabase credentials. It should look like this, with urls and keys that you'll use in your local project. Make note of the `Studio URL` as that is the GUI interface where you can make db changes:

   ```bash
   Started supabase local development setup.

   API URL: http://localhost:54321
   DB URL: postgresql://postgres:postgres@localhost:54322/postgres
   Studio URL: http://localhost:54323
   Inbucket URL: http://localhost:54324
   anon key: eyJh......
   service_role key: eyJh......
   ```

1. Update your local .env.local file to point to the local supabase instance
   ```
   NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh........
   ```
1. At any point, to see this information again, you can run `supabase status`
1. To stop all local supabase services run `supabase stop`
1. To seed data to local db (for test data in local db), checkout: https://supabase.com/docs/guides/cli/seeding-your-database

## Fetch DB changes from remote Supabase (prod)

1. Ensure your local supabase environment is linked to the remote one
   ```bash
   supabase link --project-ref gwaoosxcrdzjmvevkakm
   ```
1. Pull any new remote changes
   ```bash
   supabase db pull
   Update remote migration history table? [Y/n] Y
   ```
   Any new changes will be created as a migration file in `supabase/migrations` folder
1. Review these migrations and apply them to your local supabase db
   ```bash
   supabase migration up
   ```

## Push local DB changes to remote Supabase (prod)

1. Make changes in your local supabase. You can run `supabase db reset` to reset your local db with new seed data and to test if everything is working as expected
1. Ensure your local supabase environment is linked to the remote one
   ```bash
   supabase link --project-ref gwaoosxcrdzjmvevkakm
   ```
1. Fetch any unapplied changes from the remote Supabase by following the previous step. `bash supabase db pull` and if neededd, `supabase migration up`

1. Next, if you run the command `supabase db diff` you should see the result showing what changed and hasn't been pushed to remote. Apply these changes to a new migration.
   ```bash
   supabase db diff -f <migration-name>
   ```
   this will output a sql file your supabase local repo in the migrations folder
1. Push changes
   ```bash
   supabase db push
   ```
1. Visit the supabase website (remote) and verify the changes have been applied as expected.

Check out [the docs for Local Development](https://supabase.com/docs/guides/getting-started/local-development) fore more details.

## Deployment

We are using Vercel to handle the automated deployment. Due to the limitation of Vercel free tier, I cannot add any collaborators to the app. However, any changes pushed to the `main` branch will be deployed automatically to the [website](tryscript.vercel.app)
