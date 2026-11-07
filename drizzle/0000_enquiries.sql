CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` text PRIMARY KEY NOT NULL,
  `reference_number` text NOT NULL UNIQUE,
  `name` text NOT NULL,
  `work_email` text NOT NULL,
  `organization` text NOT NULL,
  `phone` text,
  `engagement_type` text NOT NULL,
  `message` text NOT NULL,
  `status` text DEFAULT 'NEW' NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `enquiries_created_at_idx` ON `enquiries` (`created_at`);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS `enquiries_status_idx` ON `enquiries` (`status`);
