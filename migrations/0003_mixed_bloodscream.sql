ALTER TABLE "challengeOptions" RENAME TO "challenge_options";--> statement-breakpoint
ALTER TABLE "challengeProgress" RENAME TO "challenge_progress";--> statement-breakpoint
ALTER TABLE "challenge_options" DROP CONSTRAINT "challengeOptions_challenge_id_challenges_id_fk";
--> statement-breakpoint
ALTER TABLE "challenge_progress" DROP CONSTRAINT "challengeProgress_challenge_id_challenges_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "challenge_options" ADD CONSTRAINT "challenge_options_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "challenge_progress" ADD CONSTRAINT "challenge_progress_challenge_id_challenges_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenges"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
