<img src="https://cdn.navid.me/platforms/teachable.png" alt="Teachable" width="88">

# Teachable MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/teachable-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/teachable-mcp-cli)
[![CI](https://github.com/thenavidm/teachable-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/teachable-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

A Teachable CLI and local MCP for school workflows: stable v1 by default, explicit beta v2, private school profiles, confirmed effects, reviewed batches and bounded private exports.

One install, one implementation on both surfaces. Teachable's official remote MCP already executes account requests and searches docs; this companion adds specific local workflows. It does not implement end-user OAuth.

Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=teachable-mcp-cli&utm_content=readme).

<img src="https://cdn.navid.me/repos/teachable-mcp-cli-retina.gif" alt="Codex illustrating Teachable course reads and a locally reviewed enrollment batch" width="520">

## Two ways to use it

### Command line

```bash
teachable-cli tools
teachable-cli list-courses --page 1 --per 5 --agent
teachable-cli get-operation-schema --operation create_enrollment --agent
teachable-cli <command> --help
```

Use it directly or through a shell agent after configuring the intended private school. Effects require explicit --confirm; presentation flags never grant approval.

### MCP server, for your AI app

```bash
codex mcp add teachable -- npx -y @thenavidm/teachable-mcp-cli@latest
```

A supported client launches the local stdio server and discovers the same tasks. Forward private settings through the client runtime. [INSTALL.md](INSTALL.md) covers clients, OS paths, desktop and Docker setup.

### Which one

| Where you work | Surface |
| --- | --- |
| Codex or another shell agent | Dedicated CLI, local MCP or both |
| Supported local MCP app | Local stdio MCP; extension where supported |
| Script or CI task | CLI with private runtime credentials |
| URL-only hosted client | Teachable's official remote MCP is an alternative |

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| Show Course Enrollments | `teachable-cli list-enrollments` | `list_enrollments` |
| Mark Lecture Complete | `teachable-cli mark-lecture-complete` | `mark_lecture_complete` |
| Show Quiz Responses | `teachable-cli list-quiz-responses` | `list_quiz_responses` |
| Show Quiz | `teachable-cli get-quiz` | `get_quiz` |
| List Quizzes | `teachable-cli list-quizzes` | `list_quizzes` |
| Show Video | `teachable-cli get-video` | `get_video` |
| Show Lecture | `teachable-cli get-lecture` | `get_lecture` |
| Course Progress | `teachable-cli get-course-progress` | `get_course_progress` |
| Show Course | `teachable-cli get-course` | `get_course` |
| List Courses | `teachable-cli list-courses` | `list_courses` |
| Enroll User | `teachable-cli create-enrollment` | `create_enrollment` |
| Show Pricing Plans | `teachable-cli get-pricing-plan` | `get_pricing_plan` |
| List Pricing Plans | `teachable-cli list-pricing-plans` | `list_pricing_plans` |
| List Transactions | `teachable-cli list-transactions` | `list_transactions` |
| Unenroll User | `teachable-cli unenroll-user` | `unenroll_user` |
| Show User | `teachable-cli get-user` | `get_user` |
| Update User | `teachable-cli update-user` | `update_user` |
| List Users | `teachable-cli list-users` | `list_users` |
| Create User | `teachable-cli create-user` | `create_user` |
| Show Webhook Events | `teachable-cli get-webhook-events` | `get_webhook_events` |
| List Webhooks | `teachable-cli list-webhooks` | `list_webhooks` |
| Get school customizations | `teachable-cli v2-get-school-customizations` | `v2_get_school_customizations` |
| Delete a pricing plan | `teachable-cli v2-delete-pricing-plan` | `v2_delete_pricing_plan` |
| Get a pricing plan | `teachable-cli v2-get-pricing-plan` | `v2_get_pricing_plan` |
| Update a pricing plan | `teachable-cli v2-update-pricing-plan` | `v2_update_pricing_plan` |
| List pricing plans for a product | `teachable-cli v2-list-pricing-plans-for-product` | `v2_list_pricing_plans_for_product` |
| Create a pricing plan for a product | `teachable-cli v2-create-pricing-plan-for-product` | `v2_create_pricing_plan_for_product` |
| Delete a coupon | `teachable-cli v2-delete-coupon` | `v2_delete_coupon` |
| Get a coupon | `teachable-cli v2-get-coupon` | `v2_get_coupon` |
| Update a coupon | `teachable-cli v2-update-coupon` | `v2_update_coupon` |
| List all coupons | `teachable-cli v2-list-coupons` | `v2_list_coupons` |
| Create a coupon | `teachable-cli v2-create-coupon` | `v2_create_coupon` |
| List comments for a course | `teachable-cli v2-list-comments-for-course` | `v2_list_comments_for_course` |
| Get compliance settings for a course | `teachable-cli v2-get-compliance-settings-for-course` | `v2_get_compliance_settings_for_course` |
| Update compliance settings for a course | `teachable-cli v2-update-compliance-settings-for-course` | `v2_update_compliance_settings_for_course` |
| Unenroll a user from a course | `teachable-cli v2-unenroll-user-from-course` | `v2_unenroll_user_from_course` |
| Get a user's enrollments for a course | `teachable-cli v2-get-user-s-enrollments-for-course` | `v2_get_user_s_enrollments_for_course` |
| Update a course enrollment | `teachable-cli v2-update-course-enrollment` | `v2_update_course_enrollment` |
| Enroll a user in a course | `teachable-cli v2-enroll-user-in-course` | `v2_enroll_user_in_course` |
| List enrollments for a course | `teachable-cli v2-list-enrollments-for-course` | `v2_list_enrollments_for_course` |
| Delete content (attachment) from a lesson (lecture) | `teachable-cli v2-delete-content-attachment-from-lesson-lecture` | `v2_delete_content_attachment_from_lesson_lecture` |
| Get content (attachment) for a lesson (lecture) | `teachable-cli v2-get-content-attachment-for-lesson-lecture` | `v2_get_content_attachment_for_lesson_lecture` |
| Update content (attachment) for a lesson (lecture) | `teachable-cli v2-update-content-attachment-for-lesson-lecture` | `v2_update_content_attachment_for_lesson_lecture` |
| List content (attachments) for a lesson (lecture) | `teachable-cli v2-list-content-attachments-for-lesson-lecture` | `v2_list_content_attachments_for_lesson_lecture` |
| Create content (attachment) for a lesson (lecture) | `teachable-cli v2-create-content-attachment-for-lesson-lecture` | `v2_create_content_attachment_for_lesson_lecture` |
| Reorder content (attachments) in a lesson (lecture) | `teachable-cli v2-reorder-content-attachments-in-lesson-lecture` | `v2_reorder_content_attachments_in_lesson_lecture` |
| Delete a lecture comment | `teachable-cli v2-delete-lecture-comment` | `v2_delete_lecture_comment` |
| Update comment moderation status | `teachable-cli v2-update-comment-moderation-status` | `v2_update_comment_moderation_status` |
| List comments for a lecture | `teachable-cli v2-list-comments-for-lecture` | `v2_list_comments_for_lecture` |
| Create a comment on a lecture | `teachable-cli v2-create-comment-on-lecture` | `v2_create_comment_on_lecture` |
| List responses for a lecture quiz | `teachable-cli v2-list-responses-for-lecture-quiz` | `v2_list_responses_for_lecture_quiz` |
| Delete a lecture quiz | `teachable-cli v2-delete-lecture-quiz` | `v2_delete_lecture_quiz` |
| Get a lecture quiz | `teachable-cli v2-get-lecture-quiz` | `v2_get_lecture_quiz` |
| List quizzes for a lecture | `teachable-cli v2-list-quizzes-for-lecture` | `v2_list_quizzes_for_lecture` |
| Mark lecture as not completed for a user | `teachable-cli v2-mark-lecture-as-not-completed-for-user` | `v2_mark_lecture_as_not_completed_for_user` |
| Get lecture completion status for a user | `teachable-cli v2-get-lecture-completion-status-for-user` | `v2_get_lecture_completion_status_for_user` |
| Mark lecture as completed for a user | `teachable-cli v2-mark-lecture-as-completed-for-user` | `v2_mark_lecture_as_completed_for_user` |
| Get video for a lecture | `teachable-cli v2-get-video-for-lecture` | `v2_get_video_for_lecture` |
| Delete a lecture | `teachable-cli v2-delete-lecture` | `v2_delete_lecture` |
| Get a lecture | `teachable-cli v2-get-lecture` | `v2_get_lecture` |
| Update a lecture | `teachable-cli v2-update-lecture` | `v2_update_lecture` |
| List lectures for a course | `teachable-cli v2-list-lectures-for-course` | `v2_list_lectures_for_course` |
| Create a lecture in a section | `teachable-cli v2-create-lecture-in-section` | `v2_create_lecture_in_section` |
| Reorder lectures in a section | `teachable-cli v2-reorder-lectures-in-section` | `v2_reorder_lectures_in_section` |
| Get a course section | `teachable-cli v2-get-course-section` | `v2_get_course_section` |
| Update a course section | `teachable-cli v2-update-course-section` | `v2_update_course_section` |
| Replace a course section | `teachable-cli v2-replace-course-section` | `v2_replace_course_section` |
| List sections for a course | `teachable-cli v2-list-sections-for-course` | `v2_list_sections_for_course` |
| Create a section in a course | `teachable-cli v2-create-section-in-course` | `v2_create_section_in_course` |
| Reorder sections in a course | `teachable-cli v2-reorder-sections-in-course` | `v2_reorder_sections_in_course` |
| Get course progress for a user | `teachable-cli v2-get-course-progress-for-user` | `v2_get_course_progress_for_user` |
| Get a course | `teachable-cli v2-get-course` | `v2_get_course` |
| Update a course | `teachable-cli v2-update-course` | `v2_update_course` |
| List all courses | `teachable-cli v2-list-courses` | `v2_list_courses` |
| Create a course | `teachable-cli v2-create-course` | `v2_create_course` |
| Delete an attachment from a digital download | `teachable-cli v2-delete-attachment-from-digital-download` | `v2_delete_attachment_from_digital_download` |
| Get an attachment for a digital download | `teachable-cli v2-get-attachment-for-digital-download` | `v2_get_attachment_for_digital_download` |
| List attachments for a digital download | `teachable-cli v2-list-attachments-for-digital-download` | `v2_list_attachments_for_digital_download` |
| Create an attachment for a digital download | `teachable-cli v2-create-attachment-for-digital-download` | `v2_create_attachment_for_digital_download` |
| Unenroll a user from a digital download | `teachable-cli v2-unenroll-user-from-digital-download` | `v2_unenroll_user_from_digital_download` |
| Get an enrollment for a digital download | `teachable-cli v2-get-enrollment-for-digital-download` | `v2_get_enrollment_for_digital_download` |
| Enroll a user in a digital download | `teachable-cli v2-enroll-user-in-digital-download` | `v2_enroll_user_in_digital_download` |
| List enrollments for a digital download | `teachable-cli v2-list-enrollments-for-digital-download` | `v2_list_enrollments_for_digital_download` |
| Delete a digital download | `teachable-cli v2-delete-digital-download` | `v2_delete_digital_download` |
| Get a digital download | `teachable-cli v2-get-digital-download` | `v2_get_digital_download` |
| Update a digital download | `teachable-cli v2-update-digital-download` | `v2_update_digital_download` |
| List all digital downloads | `teachable-cli v2-list-digital-downloads` | `v2_list_digital_downloads` |
| Create a digital download | `teachable-cli v2-create-digital-download` | `v2_create_digital_download` |
| Unenroll a user from a product collection | `teachable-cli v2-unenroll-user-from-product-collection` | `v2_unenroll_user_from_product_collection` |
| Get an enrollment for a product collection | `teachable-cli v2-get-enrollment-for-product-collection` | `v2_get_enrollment_for_product_collection` |
| Update a product collection enrollment | `teachable-cli v2-update-product-collection-enrollment` | `v2_update_product_collection_enrollment` |
| Enroll a user in a product collection | `teachable-cli v2-enroll-user-in-product-collection` | `v2_enroll_user_in_product_collection` |
| List enrollments for a product collection | `teachable-cli v2-list-enrollments-for-product-collection` | `v2_list_enrollments_for_product_collection` |
| Remove a product from a product collection | `teachable-cli v2-remove-product-from-product-collection` | `v2_remove_product_from_product_collection` |
| List products in a product collection | `teachable-cli v2-list-products-in-product-collection` | `v2_list_products_in_product_collection` |
| Add a product to a product collection | `teachable-cli v2-add-product-to-product-collection` | `v2_add_product_to_product_collection` |
| Delete a product collection | `teachable-cli v2-delete-product-collection` | `v2_delete_product_collection` |
| Get a product collection | `teachable-cli v2-get-product-collection` | `v2_get_product_collection` |
| Update a product collection | `teachable-cli v2-update-product-collection` | `v2_update_product_collection` |
| Replace a product collection | `teachable-cli v2-replace-product-collection` | `v2_replace_product_collection` |
| List all product collections | `teachable-cli v2-list-product-collections` | `v2_list_product_collections` |
| Create a product collection | `teachable-cli v2-create-product-collection` | `v2_create_product_collection` |
| List all products | `teachable-cli v2-list-products` | `v2_list_products` |
| Get a purchase | `teachable-cli v2-get-purchase` | `v2_get_purchase` |
| List purchases | `teachable-cli v2-list-purchases` | `v2_list_purchases` |
| Get a transaction | `teachable-cli v2-get-transaction` | `v2_get_transaction` |
| List transactions | `teachable-cli v2-list-transactions` | `v2_list_transactions` |
| Create pre-signed upload credentials | `teachable-cli v2-create-pre-signed-upload-credentials` | `v2_create_pre_signed_upload_credentials` |
| List purchases for a user | `teachable-cli v2-list-purchases-for-user` | `v2_list_purchases_for_user` |
| List quiz responses for a user | `teachable-cli v2-list-quiz-responses-for-user` | `v2_list_quiz_responses_for_user` |
| Revoke a user session | `teachable-cli v2-revoke-user-session` | `v2_revoke_user_session` |
| Revoke all user sessions | `teachable-cli v2-revoke-user-sessions` | `v2_revoke_user_sessions` |
| List user sessions | `teachable-cli v2-list-user-sessions` | `v2_list_user_sessions` |
| Delete a user | `teachable-cli v2-delete-user` | `v2_delete_user` |
| Get a user | `teachable-cli v2-get-user` | `v2_get_user` |
| Update a user | `teachable-cli v2-update-user` | `v2_update_user` |
| List users | `teachable-cli v2-list-users` | `v2_list_users` |
| Create a user | `teachable-cli v2-create-user` | `v2_create_user` |
| List private school profiles | `teachable-cli list-accounts` | `list_accounts` |
| Inspect native contract | `teachable-cli get-operation-schema` | `get_operation_schema` |
| Review ordered school effects | `teachable-cli preview-school-batch` | `preview_school_batch` |
| Execute reviewed school effects | `teachable-cli submit-school-batch` | `submit_school_batch` |
| Export bounded private metadata | `teachable-cli export-resources` | `export_resources` |

## Contents

- [1. What you can ask it](#1-what-you-can-ask-it)
- [2. Set up your account](#2-set-up-your-account)
- [3. Install](#3-install)
- [4. Output and exit codes](#4-output-and-exit-codes)
- [5. Which surface and what each costs](#5-which-surface-and-what-each-costs)
- [6. Tools](#6-tools)
- [7. Writing safely](#7-writing-safely)
- [8. API versions and native workflows](#8-api-versions-and-native-workflows)
- [9. Several accounts and reviewed batches](#9-several-accounts-and-reviewed-batches)
- [10. Pagination and private exports](#10-pagination-and-private-exports)
- [11. How it works](#11-how-it-works)
- [12. Your data](#12-your-data)
- [13. Official and community comparison](#13-official-and-community-comparison)
- [14. Versions and migration](#14-versions-and-migration)
- [15. Environment variables and removal](#15-environment-variables-and-removal)
- [16. Risks](#16-risks)
- [17. Troubleshooting](#17-troubleshooting)
- [18. FAQ](#18-faq)

## 1. What you can ask it

Ask for a bounded task in the intended school:

- List the first five courses and show which are published.
- Read this student's current enrollments before preparing a course enrollment change.
- Preview these exact enrollment changes, then execute only the batch I approve.
- Export up to ten pages of course metadata into a new private file and report continuation.
- Inspect the beta lecture-list schema after I explicitly enable the version 2 profile.
- Show the separate upload-credential and content-attachment steps; do not publish automatically.

The terminal illustrates real implemented tool names and a reviewed workflow. It is not an authenticated recording of a school account.

## 2. Set up your account

Use the intended school owner account to open **Settings > API > Create API Key**. Give the key a name and select only the permissions needed. API eligibility and beta access remain provider-controlled. Follow [Teachable authentication](https://docs.teachable.com/v2.0/docs/authentication).

Choose one source: `TEACHABLE_API_KEY` in private runtime settings, or `TEACHABLE_CREDENTIALS_FILE` pointing to an absolute owner-private regular JSON file containing `api_key`. Never mix them. The file must be non-symlink, at most 64 KiB and, on POSIX, owned by the process user with owner-only permissions. Restrict Windows ACLs separately. Credentials do not belong in repositories, chat, screenshots, user payloads or project MCP config.

```bash
teachable-cli login
teachable-cli list-accounts --agent
teachable-cli doctor
teachable-cli doctor --network
```

Login prints instructions only. Local doctor reports configuration availability without proving the key is valid. The deliberate network option performs one version-matched courses read. Success there does not establish all scopes, ownership or every native task. Keys are cached within the process; restart clients after rotation. Revoke through **Settings > API > More Actions > Revoke Key**.

## 3. Install

Use Node 22+ in the runtime that launches the server. The complete [INSTALL.md](INSTALL.md) follows the existing house client setup for Codex, desktop apps, editors, shell agents and all three declared desktop OSes.

```bash
npm install -g @thenavidm/teachable-mcp-cli@latest
teachable-cli --version
teachable-cli tools
teachable-cli schema list-courses
codex mcp add teachable -- npx -y @thenavidm/teachable-mcp-cli@latest
codex mcp list
```

Configure private credentials before the first account read. This is a local stdio MCP, without a public HTTP listener. The desktop release is [teachable-2.0.0.mcpb](https://github.com/thenavidm/teachable-mcp-cli/releases/download/v2.0.0/teachable-2.0.0.mcpb); use the supported host Extensions screen. It bundles production JavaScript dependencies, while the host must supply a compatible Node runtime.

## 4. Output and exit codes

Schemas, validation, handlers and confirmation policy are shared across both binaries. `--agent` selects compact JSON presentation for shell agents; `--select a,b.c` projects output fields. Use `--json` or `--compact` directly when appropriate. `--yes` affects presentation and never grants effect approval. Errors go to stderr.

| Exit | Meaning |
| --- | --- |
| 0 | Successful command |
| 2 | Usage, invalid arguments or refused effect |
| 3 | Resource not found |
| 4 | Provider authentication/permission failure |
| 5 | Other API or network failure |
| 7 | Provider rate limit |
| 10 | Missing or invalid local configuration |

```bash
teachable-cli list-courses --page 1 --per 5 --agent
teachable-cli get-course --course-id 7 --account intended-school --json
teachable-cli schema create-enrollment
```

Numeric IDs in examples are illustrative; replace them with reviewed IDs in the intended school. Native snake_case fields become dash flags. Objects and arrays use JSON. Do not mix native body flags, payload and payload_file. Native body requirements are validated before fetching, even when individual flags are optional in discovery.

## 5. Which surface and what each costs

CLI suits shell agents, scripts and selected tasks. MCP suits supported apps that discover and call tools directly. Both execute the same implementation.

| Mode | Discovered tasks | Read operations | Confirmed effects |
| --- | --- | --- | --- |
| Stable v1 default | 26 | 19 | 7 |
| Stable read-only | 19 | 19 | 0 |
| Explicit beta enabled | 123 | 64 | 59 |
| Beta enabled read-only | 64 | 64 | 0 |

The beta-enabled list includes both API versions plus five local helpers. Each native call still requires a matching profile version. CLI help/results enter context on demand; MCP schema loading may be deferred by the client. Discovery size alone cannot show task efficiency.

Matched completed Codex task/token measurement remains pending. A fair comparison must use equivalent successful tasks, current client/model/package versions, loading mode and total usage including help, outputs, errors and retries. No schema-character estimate or borrowed benchmark is published as savings.

## 6. Tools

All 123 beta-enabled discovered tasks are documented below. Stable default exposes 26; beta tasks are explicitly marked and require matching version profiles. The five local workflows are not additional provider endpoints.

### list_enrollments

Fetch active enrolled students and student progress for a specific course.

CLI: `teachable-cli list-enrollments`. Policy: read.

Native: `GET /v1/courses/{course_id}/enrollments`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return enrollments for a specific course by the unique course ID. |
| `enrolled_in_after` | string (format=date-time) | Optional | Search for students who are enrolled after a specific date/time. Formatted in ISO8601. |
| `enrolled_in_before` | string (format=date-time) | Optional | Search for students who are enrolled before a specific date/time. Formatted in ISO8601. |
| `sort_direction` | asc, desc | Optional | Enrollments are sorted by the 'enrolled_at' datetime. You can choose the direction by including the sort_direction param. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### mark_lecture_complete

Mark a specific course lecture as complete.

CLI: `teachable-cli mark-lecture-complete`. Policy: explicit confirmation.

Native: `POST /v1/courses/{course_id}/lectures/{lecture_id}/mark_complete`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | The unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | The unique lecture ID. |
| `user_id` | integer (format=int32) | Optional | The unique ID of the user. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| user_id | integer (format=int32) | Required | The unique ID of the user. |

### list_quiz_responses

Fetch the responses of quiz.

CLI: `teachable-cli list-quiz-responses`. Policy: read.

Native: `GET /v1/courses/{course_id}/lectures/{lecture_id}/quizzes/{quiz_id}/responses`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return results by unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | Return results by unique lecture ID. |
| `quiz_id` | integer (minimum=1, format=int32) | Required | Return results by unique quiz attachment ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### get_quiz

Fetch a specific quiz information.

CLI: `teachable-cli get-quiz`. Policy: read.

Native: `GET /v1/courses/{course_id}/lectures/{lecture_id}/quizzes/{quiz_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return results by unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | Return results by unique lecture ID. |
| `quiz_id` | integer (minimum=1, format=int32) | Required | Return results by unique quiz attachment ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### list_quizzes

Fetch an id list of quizzes in a specific course lecture.

CLI: `teachable-cli list-quizzes`. Policy: read.

Native: `GET /v1/courses/{course_id}/lectures/{lecture_id}/quizzes`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return results by unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | Return results by unique lecture ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### get_video

Fetch a specific video information.

CLI: `teachable-cli get-video`. Policy: read.

Native: `GET /v1/courses/{course_id}/lectures/{lecture_id}/videos/{video_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return results by unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | Return results by unique lecture ID. |
| `video_id` | integer (minimum=1, format=int32) | Required | Return results by unique video attachment ID. |
| `user_id` | integer (format=int32) | Optional | Specify the user who is watching the video |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### get_lecture

Fetch content of a specific course lecture.

CLI: `teachable-cli get-lecture`. Policy: read.

Native: `GET /v1/courses/{course_id}/lectures/{lecture_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return results by unique course ID that contains the lecture. |
| `lecture_id` | integer (minimum=1, format=int32) | Required | Return results by unique lecture ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### get_course_progress

Fetch a specific user's course progress.

CLI: `teachable-cli get-course-progress`. Policy: read.

Native: `GET /v1/courses/{course_id}/progress`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | The unique course ID that contains the lecture. |
| `user_id` | integer (format=int32) | Required | The unique ID of the user. |
| `page` | integer (format=int32) | Optional | Used in pagination when number of courses exceed the maximum amount of results per page |
| `per` | integer (format=int32) | Optional | Used in pagination to define amount of courses per page, when not defined the maximum is 20 |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### get_course

Fetch a specific course by ID.

CLI: `teachable-cli get-course`. Policy: read.

Native: `GET /v1/courses/{course_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer (minimum=1, format=int32) | Required | Return a course by its unique ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### list_courses

Fetch all courses at your school.

CLI: `teachable-cli list-courses`. Policy: read.

Native: `GET /v1/courses`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | Filter courses by course name |
| `is_published` | boolean | Optional | Filter courses by published status. If true, return published courses. If false, return unpublished courses. |
| `author_bio_id` | integer (format=int32) | Optional | Filter courses by a specific course author via the course author's bio ID. |
| `created_at` | string (format=date-time) | Optional | Return courses by the date & time of course creation. Formatted in ISO8601. |
| `page` | integer (format=int32) | Optional | Used in pagination when number of courses exceed the maximum amount of results per page |
| `per` | integer (format=int32) | Optional | Used in pagination to define amount of courses per page, when not defined the maximum is 20 |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### create_enrollment

Enroll a user in a course.

CLI: `teachable-cli create-enrollment`. Policy: explicit confirmation.

Native: `POST /v1/enroll`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer (format=int32) | Optional | The unique ID of the user. |
| `course_id` | integer (format=int32) | Optional | The unique ID of the course. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| user_id | integer (format=int32) | Required | The unique ID of the user. |
| course_id | integer (format=int32) | Required | The unique ID of the course. |

### get_pricing_plan

Fetch details of a specific pricing plan. Currently only supports pricing plans associated with courses.

CLI: `teachable-cli get-pricing-plan`. Policy: read.

Native: `GET /v1/pricing_plans/{pricing_plan_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `pricing_plan_id` | integer (minimum=1, format=int32) | Required | Search for a pricing plan by its unique ID. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### list_pricing_plans

Fetch all the pricing plans at your school

CLI: `teachable-cli list-pricing-plans`. Policy: read.

Native: `GET /v1/pricing_plans`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (format=int32) | Optional | Used in pagination when number of pricing plans exceeds the maximum amount of results per page |
| `per` | integer (format=int32) | Optional | Used in pagination to define amount of pricing plans per page, when not defined the maximum is 5 |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### list_transactions

Fetch a list of sales transactions made in your school. (New transactions can take up to two minutes to be returned via API call from the time of sale.)

CLI: `teachable-cli list-transactions`. Policy: read.

Native: `GET /v1/transactions`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer (format=int32) | Optional | Native field |
| `affiliate_id` | integer (format=int32) | Optional | Native field |
| `course_id` | integer (format=int32) | Optional | Native field |
| `pricing_plan_id` | integer (format=int32) | Optional | Native field |
| `is_fully_refunded` | boolean | Optional | Native field |
| `is_chargeback` | boolean | Optional | Native field |
| `start` | string (format=date-time) | Optional | The beginning of the time period to return results for (exclusive), in ISO8601 format. |
| `end` | string (format=date-time) | Optional | The end of the time period to return results for (inclusive), in ISO8601 format. |
| `page` | integer (format=int32) | Optional | Used in pagination when number of transactions exceed the maximum amount of results per page |
| `per` | integer (format=int32) | Optional | Used in pagination to define amount of transactions per page, when not defined the maximum is 20 |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### unenroll_user

Unenroll a user from a course.

CLI: `teachable-cli unenroll-user`. Policy: explicit confirmation.

Native: `POST /v1/unenroll`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer (format=int32) | Optional | The unique ID of the user. |
| `course_id` | integer (format=int32) | Optional | The unique ID of the course. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| user_id | integer (format=int32) | Required | The unique ID of the user. |
| course_id | integer (format=int32) | Required | The unique ID of the course. |

### get_user

List a specific user and their course enrollments by user ID.

CLI: `teachable-cli get-user`. Policy: read.

Native: `GET /v1/users/{user_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer (minimum=1, format=int32) | Required | The unique ID of the user. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### update_user

Update the name or src of a user.

CLI: `teachable-cli update-user`. Policy: explicit confirmation.

Native: `PATCH /v1/users/{user_id}`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer (minimum=1, format=int32) | Required | The unique ID of the user. |
| `name` | string | Optional | The name of the user. |
| `src` | string | Optional | The signup source of the user, which is displayed on the Information tab of the user profile. . |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | The name of the user. |
| src | string | Optional | The signup source of the user, which is displayed on the Information tab of the user profile. . |

### list_users

Get a list of users

CLI: `teachable-cli list-users`. Policy: read.

Native: `GET /v1/users`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (format=int32) | Optional | Used in pagination when number of users exceed the maximum amount of results per page |
| `per` | integer (format=int32) | Optional | Used in pagination to define amount of users per page, when not defined the maximum is 20 |
| `email` | string | Optional | Filter users by user email. |
| `search_after` | integer (format=int32) | Optional | Used when number of users exceeds 10,000 records. Use the search_after value in the parameters to search the next set of records. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### create_user

Create a new user

CLI: `teachable-cli create-user`. Policy: explicit confirmation.

Native: `POST /v1/users`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | The name of the new user. |
| `email` | string | Optional | The email address of the new user.. |
| `src` | string | Optional | The [signup source](https://support.teachable.com/hc/en-us/articles/219571648#TrackSignupSourceshttps://support.teachable.com/hc/en-us/articles/219571648#TrackSignupSources) of the user, Information tab of the user profile. SRC can also be used as a custom value when creating users in your school. For example, if you use any unique identifiers to help manage your users in multiple external systems (such as unique IDs, tags, etc.), you can use the src field to keep this identifier associated with your user in Teachable. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | The name of the new user. |
| email | string | Required | The email address of the new user.. |
| password | string | Optional | The password of the new user. Must be at least 6 characters. |
| src | string | Optional | The [signup source](https://support.teachable.com/hc/en-us/articles/219571648#TrackSignupSourceshttps://support.teachable.com/hc/en-us/articles/219571648#TrackSignupSources) of the user, Information tab of the user profile. SRC can also be used as a custom value when creating users in your school. For example, if you use any unique identifiers to help manage your users in multiple external systems (such as unique IDs, tags, etc.), you can use the src field to keep this identifier associated with your user in Teachable. |

### get_webhook_events

Fetch all the events for a webhook.

CLI: `teachable-cli get-webhook-events`. Policy: read.

Native: `GET /v1/webhooks/{webhook_id}/events`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `webhook_id` | integer (format=int32) | Required | The unique ID of the webhook. |
| `response_http_status_gte` | integer (format=int32) | Optional | Filter responses by HTTP status code of the webhook event, greater than or equal to the provided value (i.e., enter 200 to search for webhook events that had an HTTP status code of 200 or greater). |
| `response_http_status_lte` | integer (format=int32) | Optional | Filter responses by HTTP status of the webhook event, less than or equal to the provided value. (e.g., enter 200 to search for webhook events that had an HTTP status code of 200 or less). |
| `created_before` | string (format=date-time, default=2020-04-17T19:44:03Z) | Optional | Search for webhook events that were created before a specific date/time. Formatted in ISO 8601. |
| `created_after` | string (format=date-time, default=2020-04-17T19:44:03Z) | Optional | Search for webhook events that were created after a specific date/time. Formatted in ISO 8601. |
| `page` | integer (format=int32) | Optional | Set the page number to be returned. (i.e., If you have two pages of results with 20 results per page, set the page value to 1 to receive results 1 through 20, or set the page value to 2 to receive results 21-40). |
| `per` | integer (format=int32) | Optional | Set the maximum number of results to be returned by page. By default, each page will return 20 results. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### list_webhooks

Fetch all webhook events for your school.

CLI: `teachable-cli list-webhooks`. Policy: read.

Native: `GET /v1/webhooks`. Version: stable v1. [Current source](https://docs.teachable.com/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_get_school_customizations

Retrieve the current school customization (theme) settings exposed by the public API.

CLI: `teachable-cli v2-get-school-customizations`. Policy: read.

Native: `GET /v2/customizations`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_pricing_plan

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Soft-delete a pricing plan by setting is_published to false. The pricing plan record is preserved for audit purposes but will no longer be visible to end users.

CLI: `teachable-cli v2-delete-pricing-plan`. Policy: explicit confirmation.

Native: `DELETE /v2/products/{product_type}/{product_id}/pricing-plans/{plan_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_type` | string | Required | Product type (courses, product-collections, digital-downloads, coaching, membership-tiers) |
| `product_id` | integer | Required | Product ID |
| `plan_id` | integer | Required | Pricing plan ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_pricing_plan

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a single pricing plan for a specific product across all supported product types (courses, product-collections, digital-downloads, coaching, membership-tiers).

CLI: `teachable-cli v2-get-pricing-plan`. Policy: read.

Native: `GET /v2/products/{product_type}/{product_id}/pricing-plans/{plan_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_type` | string | Required | Product type (courses, product-collections, digital-downloads, coaching, membership-tiers) |
| `product_id` | integer | Required | Product ID |
| `plan_id` | integer | Required | Pricing plan ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_pricing_plan

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Update a pricing plan. Content, visibility, access-limit, and enrollment-cap fields are applied. Read-only fields (for example price, currency) are rejected by request schema validation with 400.

CLI: `teachable-cli v2-update-pricing-plan`. Policy: explicit confirmation.

Native: `PATCH /v2/products/{product_type}/{product_id}/pricing-plans/{plan_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_type` | string | Required | Product type (courses, product-collections, digital-downloads, coaching, membership-tiers) |
| `product_id` | integer | Required | Product ID |
| `plan_id` | integer | Required | Pricing plan ID |
| `name` | string nullable | Optional | Native field |
| `description` | string nullable | Optional | Native field |
| `detailed_description` | string nullable | Optional | Native field |
| `cc_statement_description` | string nullable | Optional | Text shown on customer card statements. On schools using the new payments experience this is stored but not yet applied to statements. |
| `is_published` | boolean | Optional | Native field |
| `access_limit_date` | string nullable (format=date-time) | Optional | Native field |
| `access_limit_interval` | string nullable | Optional | Native field |
| `access_limit_duration` | integer nullable | Optional | Native field |
| `enrollment_cap` | integer nullable | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| `enrollment_cap_expires_at` | string nullable (format=date-time) | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| `enrollment_cap_display_priority` | string nullable | Optional | Native field |
| `enrollment_cap_fulfillment_count` | integer nullable | Optional | Native field |
| `enrollment_cap_visible` | boolean nullable | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string nullable | Optional | Native field |
| description | string nullable | Optional | Native field |
| detailed_description | string nullable | Optional | Native field |
| cc_statement_description | string nullable | Optional | Text shown on customer card statements. On schools using the new payments experience this is stored but not yet applied to statements. |
| is_published | boolean | Optional | Native field |
| access_limit_date | string nullable (format=date-time) | Optional | Native field |
| access_limit_interval | string nullable | Optional | Native field |
| access_limit_duration | integer nullable | Optional | Native field |
| enrollment_cap | integer nullable | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| enrollment_cap_expires_at | string nullable (format=date-time) | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| enrollment_cap_display_priority | string nullable | Optional | Native field |
| enrollment_cap_fulfillment_count | integer nullable | Optional | Native field |
| enrollment_cap_visible | boolean nullable | Optional | Native field |

### v2_list_pricing_plans_for_product

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a list of pricing plans for a specific product across all supported product types (courses, product-collections, digital-downloads, coaching, membership-tiers). A 400 may indicate an invalid `product_type` or invalid `page` / `per_page`.

CLI: `teachable-cli v2-list-pricing-plans-for-product`. Policy: read.

Native: `GET /v2/products/{product_type}/{product_id}/pricing-plans`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_type` | string | Required | Product type (courses, product-collections, digital-downloads, coaching, membership-tiers) |
| `product_id` | integer | Required | Product ID |
| `page` | integer (minimum=1) | Optional | Page number (1-based integer) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (integer) |
| `sort_by` | string | Optional | Sort field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `is_published` | boolean | Optional | Filter by publish status. When omitted, returns both published and unpublished pricing plans. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_pricing_plan_for_product

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Create a pricing plan for a specific product across all supported product types (courses, product-collections, digital-downloads, coaching, membership-tiers).

CLI: `teachable-cli v2-create-pricing-plan-for-product`. Policy: explicit confirmation.

Native: `POST /v2/products/{product_type}/{product_id}/pricing-plans`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_type` | string | Required | Product type (courses, product-collections, digital-downloads, coaching, membership-tiers) |
| `product_id` | integer | Required | Product ID |
| `name` | string | Optional | Native field |
| `currency` | string | Optional | ISO 4217 currency code. On schools using the new payments experience this is set automatically from the school's payment settings and the submitted value is ignored. The response returns the currency that was applied. |
| `price` | integer | Optional | Native field |
| `is_recurring` | boolean | Optional | Native field |
| `billing_interval` | day, week, month, year | Optional | Required when is_recurring is true. Membership tier plans on schools using the new payments experience accept only month or year. |
| `billing_interval_count` | integer nullable | Optional | Required when is_recurring is true. Membership tier plans on schools using the new payments experience must use 1. Defaults to 1 when omitted. |
| `description` | string nullable | Optional | Native field |
| `detailed_description` | string nullable | Optional | Native field |
| `free_trial_length` | integer nullable | Optional | Native field |
| `access_limit_date` | string nullable (format=date-time) | Optional | Native field |
| `access_limit_interval` | string nullable | Optional | Native field |
| `access_limit_duration` | integer nullable | Optional | Native field |
| `enrollment_cap` | integer nullable | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| `enrollment_cap_expires_at` | string nullable (format=date-time) | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| `enrollment_cap_display_priority` | string nullable | Optional | Native field |
| `enrollment_cap_fulfillment_count` | integer nullable | Optional | Native field |
| `enrollment_cap_visible` | boolean nullable | Optional | Native field |
| `num_payments_required` | integer nullable | Optional | Native field |
| `position` | integer nullable | Optional | Native field |
| `is_published` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| currency | string | Required | ISO 4217 currency code. On schools using the new payments experience this is set automatically from the school's payment settings and the submitted value is ignored. The response returns the currency that was applied. |
| price | integer | Required | Native field |
| is_recurring | boolean | Optional | Native field |
| billing_interval | day, week, month, year | Optional | Required when is_recurring is true. Membership tier plans on schools using the new payments experience accept only month or year. |
| billing_interval_count | integer nullable | Optional | Required when is_recurring is true. Membership tier plans on schools using the new payments experience must use 1. Defaults to 1 when omitted. |
| description | string nullable | Optional | Native field |
| detailed_description | string nullable | Optional | Native field |
| free_trial_length | integer nullable | Optional | Native field |
| access_limit_date | string nullable (format=date-time) | Optional | Native field |
| access_limit_interval | string nullable | Optional | Native field |
| access_limit_duration | integer nullable | Optional | Native field |
| enrollment_cap | integer nullable | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| enrollment_cap_expires_at | string nullable (format=date-time) | Optional | Requires the school feature plan_supports_enrollment_cap. Returns 422 when enrollment_cap or enrollment_cap_expires_at is present and the feature is disabled. |
| enrollment_cap_display_priority | string nullable | Optional | Native field |
| enrollment_cap_fulfillment_count | integer nullable | Optional | Native field |
| enrollment_cap_visible | boolean nullable | Optional | Native field |
| num_payments_required | integer nullable | Optional | Native field |
| position | integer nullable | Optional | Native field |
| is_published | boolean | Optional | Native field |

### v2_delete_coupon

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Archive a multiple-use coupon by unpublishing it (is_published becomes false). This endpoint only manages multiple-use coupons. Returns 204 if the coupon is already archived or does not exist (idempotent).

On schools using the new payments experience, archiving a coupon that has not been linked to the payments experience returns 422 "This coupon cannot be archived." This happens for coupons created before the school migrated to the new payments experience and not yet backfilled.

CLI: `teachable-cli v2-delete-coupon`. Policy: explicit confirmation.

Native: `DELETE /v2/products/coupons/{coupon_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `coupon_id` | integer | Required | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_coupon

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a single coupon by ID for the school.

CLI: `teachable-cli v2-get-coupon`. Policy: read.

Native: `GET /v2/products/coupons/{coupon_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `coupon_id` | integer | Required | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_coupon

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Update a multiple-use coupon that is not part of the student-referral program (partial update).

CLI: `teachable-cli v2-update-coupon`. Policy: explicit confirmation.

Native: `PATCH /v2/products/coupons/{coupon_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `coupon_id` | integer | Required | Native field |
| `name` | string nullable | Optional | Native field |
| `expiration_date` | string nullable (format=date-time) | Optional | Native field |
| `number_available` | integer nullable | Optional | Native field |
| `cap_visible` | boolean | Optional | Native field |
| `display_priority` | time, uses | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string nullable | Optional | Native field |
| expiration_date | string nullable (format=date-time) | Optional | Native field |
| number_available | integer nullable | Optional | Native field |
| cap_visible | boolean | Optional | Native field |
| display_priority | time, uses | Optional | Native field |

### v2_list_coupons

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a list of coupons for the school. Excludes single-use and student-referral coupons. Without product context, returns only school-wide (non-product-specific) coupons.

CLI: `teachable-cli v2-list-coupons`. Policy: read.

Native: `GET /v2/products/coupons`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `is_published` | boolean | Optional | Native field |
| `pricing_plan_id` | integer | Optional | Filter by pricing plan ID. Meaningful on schools not using the new payments experience; on schools using the new payments experience, matches only coupons scoped by pricing plan (typically empty). |
| `product_type` | course, coaching, creator_product, bundle, product_collection, digital_download, digital_product, membership_tier | Optional | Filter by product. On schools using the new payments experience, resolves via the product itself; otherwise resolves via the pricing plans attached to it. Must be paired with product_id. |
| `product_id` | integer | Optional | ID of the entity identified by product_type; required when product_type is present. |
| `created_after` | string | Optional | ISO8601 datetime; invalid values return 400. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | ISO8601 datetime; invalid values return 400. Date range between created_after and created_before cannot exceed 90 days. |
| `page` | integer (minimum=1) | Optional | Native field |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Native field |
| `sort_by` | string | Optional | Sort by field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_coupon

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Create a multiple-use coupon. Use scope_type for a school-wide coupon, pricing_plan_id to restrict it to one price (schools not using the new payments experience), or product_type + product_id to restrict it to one product (schools using the new payments experience). Exactly one of the three must be set.

CLI: `teachable-cli v2-create-coupon`. Policy: explicit confirmation.

Native: `POST /v2/products/coupons`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `code` | string | Optional | Native field |
| `name` | string | Optional | On schools using the new payments experience, maximum length is 40 characters. |
| `expiration_date` | string nullable (format=date-time) | Optional | On schools using the new payments experience, this field is required, must be a future date, and must be within 5 years from now. |
| `number_available` | integer nullable | Optional | On schools using the new payments experience, this field is required and must be at least 1. |
| `discount_amount` | integer nullable | Optional | On schools using the new payments experience, exactly one of discount_percent or discount_amount is required, and the minimum is 1. When discount_amount is set, discount_currency is required. |
| `discount_currency` | string nullable | Optional | On schools using the new payments experience, required when discount_amount is set; not allowed when discount_percent is set. |
| `discount_percent` | number nullable (minimum=0, maximum=1) | Optional | On schools using the new payments experience, exactly one of discount_percent or discount_amount is required, and the minimum is 0.01%. discount_percent and discount_currency cannot be provided together. |
| `discount_in_months` | integer nullable | Optional | Required when duration_kind is "repeating". Must be blank when duration_kind is not "repeating". Minimum value is 1. |
| `pricing_plan_id` | integer nullable | Optional | Only supported on schools not using the new payments experience. Sending this field on schools using the new payments experience returns 422. Mutually exclusive with scope_type and product_type + product_id. |
| `product_type` | course, coaching, creator_product, bundle, product_collection, digital_download, digital_product, membership_tier | Optional | Only supported on schools using the new payments experience. Sending this field otherwise returns 422. Must be paired with product_id. Mutually exclusive with scope_type and pricing_plan_id. |
| `product_id` | integer nullable | Optional | Only supported on schools using the new payments experience. Must be paired with product_type. |
| `duration_kind` | forever, once, repeating | Optional | On schools using the new payments experience, when set to "repeating", discount_in_months is required. |
| `scope_type` | all_products, courses, product_collections, creator_products, digital_products, membership_tiers | Optional | Available on all schools. Mutually exclusive with pricing_plan_id and product_type + product_id. |
| `cap_visible` | boolean | Optional | Native field |
| `display_priority` | time, uses | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| code | string | Required | Native field |
| name | string | Required | On schools using the new payments experience, maximum length is 40 characters. |
| expiration_date | string nullable (format=date-time) | Optional | On schools using the new payments experience, this field is required, must be a future date, and must be within 5 years from now. |
| number_available | integer nullable | Optional | On schools using the new payments experience, this field is required and must be at least 1. |
| discount_amount | integer nullable | Optional | On schools using the new payments experience, exactly one of discount_percent or discount_amount is required, and the minimum is 1. When discount_amount is set, discount_currency is required. |
| discount_currency | string nullable | Optional | On schools using the new payments experience, required when discount_amount is set; not allowed when discount_percent is set. |
| discount_percent | number nullable (minimum=0, maximum=1) | Optional | On schools using the new payments experience, exactly one of discount_percent or discount_amount is required, and the minimum is 0.01%. discount_percent and discount_currency cannot be provided together. |
| discount_in_months | integer nullable | Optional | Required when duration_kind is "repeating". Must be blank when duration_kind is not "repeating". Minimum value is 1. |
| pricing_plan_id | integer nullable | Optional | Only supported on schools not using the new payments experience. Sending this field on schools using the new payments experience returns 422. Mutually exclusive with scope_type and product_type + product_id. |
| product_type | course, coaching, creator_product, bundle, product_collection, digital_download, digital_product, membership_tier | Optional | Only supported on schools using the new payments experience. Sending this field otherwise returns 422. Must be paired with product_id. Mutually exclusive with scope_type and pricing_plan_id. |
| product_id | integer nullable | Optional | Only supported on schools using the new payments experience. Must be paired with product_type. |
| duration_kind | forever, once, repeating | Required | On schools using the new payments experience, when set to "repeating", discount_in_months is required. |
| scope_type | all_products, courses, product_collections, creator_products, digital_products, membership_tiers | Optional | Available on all schools. Mutually exclusive with pricing_plan_id and product_type + product_id. |
| cap_visible | boolean | Optional | Native field |
| display_priority | time, uses | Optional | Native field |

### v2_list_comments_for_course

Retrieve a paginated list of comments across all lectures in a course. Results can be filtered by status and creation date.

Without a `status` filter, comments in all statuses are returned. Use the `status` parameter to narrow results to a specific moderation state.

CLI: `teachable-cli v2-list-comments-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/comments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `created_after` | string | Optional | Filter comments created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter comments created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `status` | string | Optional | Filter by status (awaiting_review, approved, removed, denied) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | string | Optional | Sort by field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_get_compliance_settings_for_course

Retrieve the compliance configuration for a specific course.

CLI: `teachable-cli v2-get-compliance-settings-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/compliance`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_compliance_settings_for_course

Update the compliance configuration for a specific course.

**Lecture order requirement:**

When either `requirements.video_completion_enforced` or `requirements.quiz_pass_required` is `true`, `requirements.lecture_order_required` must also be `true`. Requests that violate this return **422** `validation_failed`.

The rule is checked against the course's resulting state — your request merged over its stored values — so an omitted field is evaluated using what is already saved. Sending only `{"requirements":{"video_completion_enforced":true}}` therefore succeeds on a course that already enforces lecture order and fails on one that does not. Send `lecture_order_required: true` alongside either dependent field for a result that does not depend on the course's current settings.

**Certificate configuration:**

The `certificate_settings.template_id` must reference an existing certificate page (template) belonging to the school. Certificate pages are created through the school admin UI — there is no API endpoint for creating them. Use `GET /v2/products/courses/{course_id}/compliance` to retrieve the current `template_id` if one is already configured.

When `template_id` is set and `auto_issue` is `true`, certificates are automatically issued to students upon 100% course completion. The school's plan must also support native certificates.

CLI: `teachable-cli v2-update-compliance-settings-for-course`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/compliance`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `requirements` | object | Optional | Completion requirements. When `video_completion_enforced` or `quiz_pass_required` ends up `true`, `lecture_order_required` must also be `true`, or the request returns 422. The rule is applied to the request body merged over the course's persisted values, so an omitted field is evaluated using its stored value rather than being ignored. |
| `certificate_settings` | object | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| requirements | object | Optional | Completion requirements. When `video_completion_enforced` or `quiz_pass_required` ends up `true`, `lecture_order_required` must also be `true`, or the request returns 422. The rule is applied to the request body merged over the course's persisted values, so an omitted field is evaluated using its stored value rather than being ignored. |
| requirements.video_completion_enforced | boolean | Optional | Native field |
| requirements.quiz_pass_required | boolean | Optional | Native field |
| requirements.quiz_minimum_score | number | Optional | Native field |
| requirements.quiz_maximum_retakes | integer | Optional | Native field |
| requirements.lecture_order_required | boolean | Optional | Must be `true` when `video_completion_enforced` or `quiz_pass_required` is `true`. |
| certificate_settings | object | Optional | Native field |
| certificate_settings.auto_issue | boolean | Optional | Native field |
| certificate_settings.template_id | integer | Optional | Omit to leave the certificate template unchanged. A certificate template cannot be detached through this endpoint. |

### v2_unenroll_user_from_course

Unenroll a user from a specific course.

CLI: `teachable-cli v2-unenroll-user-from-course`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_user_s_enrollments_for_course

Retrieve a user's active enrollments for a course. A user may hold more than one active enrollment for the same course — e.g. enrollments originating from different sales/products — so results are returned as a paginated collection ordered by enrollment date (most recent first). Disabled and expired-inactive enrollments are excluded; if the user has no active enrollment, an empty collection is returned.

CLI: `teachable-cli v2-get-user-s-enrollments-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `user_id` | integer | Required | User ID (enrollment is keyed by user_id in this scope) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_course_enrollment

Enroll a user in a specific course (same as PUT; supported for clients that use PATCH for upsert).

CLI: `teachable-cli v2-update-course-enrollment`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_enroll_user_in_course

Enroll a user in a specific course. If the user is already enrolled, returns the existing enrollment.

CLI: `teachable-cli v2-enroll-user-in-course`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_list_enrollments_for_course

Retrieve a list of enrollments for a specific course. A user may appear more than once: a single user can hold multiple enrollments for the same course when they originate from different sales/products, and each enrollment is distinguished by its sale. Enrollments can be filtered by enrollment date and status. The list is returned in order of enrollment date, with the most recently enrolled users appearing first.

CLI: `teachable-cli v2-list-enrollments-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/enrollments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `enrolled_after` | string | Optional | Filter enrollments after this ISO8601 datetime. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `enrolled_before` | string | Optional | Filter enrollments before this ISO8601 datetime. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `status` | string | Optional | Filter by status (active, completed, expired, disabled) |
| `user_id` | integer | Optional | Filter enrollments for a specific user |
| `sort_by` | string | Optional | Sort field (enrolled_at, completed_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_content_attachment_from_lesson_lecture

Delete a content item permanently. Only content items returned by the list/get endpoints can be deleted. System-managed content is protected and will return 403.

CLI: `teachable-cli v2-delete-content-attachment-from-lesson-lecture`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments/{attachment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `attachment_id` | integer | Required | Attachment ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_content_attachment_for_lesson_lecture

Retrieve a single content item for a specific lesson.

CLI: `teachable-cli v2-get-content-attachment-for-lesson-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments/{attachment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `attachment_id` | integer | Required | Attachment ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_content_attachment_for_lesson_lecture

Update a single content item for a specific lesson.

CLI: `teachable-cli v2-update-content-attachment-for-lesson-lecture`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments/{attachment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `attachment_id` | integer | Required | Attachment ID |
| `embeddable` | boolean | Optional | Native field |
| `downloadable` | boolean | Optional | Native field |
| `is_published` | boolean | Optional | Native field |
| `thumbnail_url` | string (maxLength=2048, format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `alt_text` | string | Optional | Native field |
| `flagged_as_decorative` | boolean | Optional | Native field |
| `text` | string (maxLength=100000) | Optional | Native field |
| `code_syntax` | string (maxLength=50) | Optional | Native field |
| `open_response_question` | object | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| embeddable | boolean | Optional | Native field |
| downloadable | boolean | Optional | Native field |
| is_published | boolean | Optional | Native field |
| thumbnail_url | string (maxLength=2048, format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| alt_text | string | Optional | Native field |
| flagged_as_decorative | boolean | Optional | Native field |
| text | string (maxLength=100000) | Optional | Native field |
| code_syntax | string (maxLength=50) | Optional | Native field |
| open_response_question | object | Optional | Native field |
| open_response_question.question | string (maxLength=10000) | Optional | Native field |
| open_response_question.required | boolean | Optional | Native field |
| open_response_question.upload_enabled | boolean | Optional | Native field |
| open_response_question.img_url | string (maxLength=2048) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| open_response_question.img_name | string (maxLength=255) | Optional | Native field |
| open_response_question.img_alt_text | string (maxLength=255) | Optional | Native field |

### v2_list_content_attachments_for_lesson_lecture

Retrieve a list of content items for a specific lesson.

CLI: `teachable-cli v2-list-content-attachments-for-lesson-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `page` | integer (minimum=1) | Optional | Current Page |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per Page |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_content_attachment_for_lesson_lecture

Create a new content item for a specific lesson.

CLI: `teachable-cli v2-create-content-attachment-for-lesson-lecture`. Policy: explicit confirmation.

Native: `POST /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `kind` | text, embed, code_embed, code_display, open_response_question, image, video, audio, pdf_embed, file | Optional | Native field |
| `text` | string (maxLength=100000) | Optional | Required for text, code_embed, code_display kinds. |
| `code_syntax` | string (maxLength=50) | Optional | Native field |
| `url` | string (maxLength=2048) | Optional | Required for embed kind. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `embeddable` | boolean | Optional | Native field |
| `downloadable` | boolean | Optional | Native field |
| `question` | string (maxLength=10000) | Optional | Required for open_response_question kind. |
| `required` | boolean | Optional | Native field |
| `upload_enabled` | boolean | Optional | Native field |
| `img_url` | string (maxLength=2048) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `img_name` | string (maxLength=255) | Optional | Native field |
| `img_alt_text` | string (maxLength=255) | Optional | Native field |
| `file` | object | Optional | Required for file, image, video, audio, pdf_embed kinds. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| kind | text, embed, code_embed, code_display, open_response_question, image, video, audio, pdf_embed, file | Optional | Native field |
| text | string (maxLength=100000) | Optional | Required for text, code_embed, code_display kinds. |
| code_syntax | string (maxLength=50) | Optional | Native field |
| url | string (maxLength=2048) | Optional | Required for embed kind. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| embeddable | boolean | Optional | Native field |
| downloadable | boolean | Optional | Native field |
| question | string (maxLength=10000) | Optional | Required for open_response_question kind. |
| required | boolean | Optional | Native field |
| upload_enabled | boolean | Optional | Native field |
| img_url | string (maxLength=2048) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| img_name | string (maxLength=255) | Optional | Native field |
| img_alt_text | string (maxLength=255) | Optional | Native field |
| file | object | Optional | Required for file, image, video, audio, pdf_embed kinds. |
| file.url | string | Required | Native field |
| file.filename | string | Optional | Native field |
| file.mimetype | string | Required | Native field |
| file.size | integer | Optional | Native field |

### v2_reorder_content_attachments_in_lesson_lecture

Reorder all content items for a specific lesson in a single atomic operation. The request body must be a JSON array containing every content item with its new position.

CLI: `teachable-cli v2-reorder-content-attachments-in-lesson-lecture`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/lectures/{lecture_id}/attachments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `data` | array (minItems=1) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| data | array (minItems=1) | Required | Native field |
| data.[].id | integer | Required | Native field |
| data.[].position | integer | Required | Native field |

### v2_delete_lecture_comment

Delete a specific comment from a lecture.

CLI: `teachable-cli v2-delete-lecture-comment`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/lectures/{lecture_id}/comments/{comment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `comment_id` | integer | Required | Comment ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_update_comment_moderation_status

Update the moderation status of a comment. Only the `status` field can be modified through this endpoint.

## Allowed Values

| Status | Description | Can be applied when current status is |
|--------|-------------|---------------------------------------|
| `approved` | Approve the comment, making it visible to students. | `awaiting_review`, `approved` (no-op) |
| `removed` | Soft-delete the comment. It remains as a placeholder to preserve thread structure. | `awaiting_review`, `approved`, `removed` (no-op) |
| `denied` | Permanently reject and hide the comment. Cannot be undone. | `awaiting_review`, `approved`, `removed`, `denied` (no-op) |

Setting a status that is not valid for the comment's current state returns a `422` error.

**Idempotency:** Setting a status equal to the comment's current status is a no-op and returns `200 OK` without modifying `updated_at`.

CLI: `teachable-cli v2-update-comment-moderation-status`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/lectures/{lecture_id}/comments/{comment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `comment_id` | integer | Required | Comment ID |
| `status` | approved, removed, denied | Optional | New moderation status. `approved`: approve the comment. `removed`: soft-delete (kept as thread placeholder). `denied`: permanently hide the comment. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| status | approved, removed, denied | Required | New moderation status. `approved`: approve the comment. `removed`: soft-delete (kept as thread placeholder). `denied`: permanently hide the comment. |

### v2_list_comments_for_lecture

Retrieve a paginated list of comments for a specific lecture. Results can be filtered by status and creation date, and sorted by `created_at` or `updated_at`.

If the lecture does not have comments enabled, this endpoint returns `200 OK` with an empty `data` array rather than an error.

Without a `status` filter, comments in all statuses are returned. Use the `status` parameter to narrow results to a specific moderation state.

## Available Statuses

| Status | Description |
|--------|-------------|
| `awaiting_review` | The comment is pending moderation. |
| `approved` | The comment is visible to students. |
| `removed` | The comment has been soft-deleted but preserved as a thread placeholder. |
| `denied` | The comment has been permanently rejected and hidden. |

CLI: `teachable-cli v2-list-comments-for-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/comments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `created_after` | string | Optional | Filter comments created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter comments created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `status` | string | Optional | Filter by status (awaiting_review, approved, removed, denied) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | string | Optional | Sort by field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_comment_on_lecture

Create a comment on a lecture. The comment is authored by the school owner and is automatically approved.

To create a reply to an existing comment, include `parent_id`. The parent comment must be in `awaiting_review` or `approved` status.

CLI: `teachable-cli v2-create-comment-on-lecture`. Policy: explicit confirmation.

Native: `POST /v2/products/courses/{course_id}/lectures/{lecture_id}/comments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `body` | string | Optional | Comment text |
| `parent_id` | integer nullable | Optional | Parent comment ID for replies |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| body | string | Required | Comment text |
| parent_id | integer nullable | Optional | Parent comment ID for replies |

### v2_list_responses_for_lecture_quiz

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a list of aggregated quiz responses for a lecture quiz (most recent submission per user).

CLI: `teachable-cli v2-list-responses-for-lecture-quiz`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/quizzes/{quiz_id}/responses`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `quiz_id` | integer | Required | Quiz ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_lecture_quiz

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Delete a specific quiz from a lecture.

CLI: `teachable-cli v2-delete-lecture-quiz`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/lectures/{lecture_id}/quizzes/{quiz_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `quiz_id` | integer | Required | Quiz ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_lecture_quiz

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a quiz by ID, including questions and correct answer metadata.

CLI: `teachable-cli v2-get-lecture-quiz`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/quizzes/{quiz_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `quiz_id` | integer | Required | Quiz ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_list_quizzes_for_lecture

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a list of quizzes for a specific lecture.

CLI: `teachable-cli v2-list-quizzes-for-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/quizzes`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | string | Optional | Sort field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_mark_lecture_as_not_completed_for_user

Mark a lecture as not completed for a specific user. Idempotent.

CLI: `teachable-cli v2-mark-lecture-as-not-completed-for-user`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/lectures/{lecture_id}/users/{user_id}/completion`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_lecture_completion_status_for_user

Retrieve the completion status of a lecture for a specific user.

CLI: `teachable-cli v2-get-lecture-completion-status-for-user`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/users/{user_id}/completion`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_mark_lecture_as_completed_for_user

Mark a lecture as completed for a user.

This endpoint accepts **no request body**. Any body sent with the request will be silently ignored. The action (marking the lecture as completed) is determined entirely by the HTTP verb (`PUT`) and the URL path.

To **undo** completion (mark the lecture as not completed), use `DELETE` on this same resource path — do **not** send a `PUT` with `{"completed": false}` or any other body content.

CLI: `teachable-cli v2-mark-lecture-as-completed-for-user`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/lectures/{lecture_id}/users/{user_id}/completion`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_video_for_lecture

Retrieve details of a specific video attachment for a lecture, including its streaming URL and metadata. When user_id is provided, the response may include user-specific progress data (current_time and url_progress_tracking) if that user has playback progress for the video.

CLI: `teachable-cli v2-get-video-for-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}/videos/{video_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `lecture_id` | integer | Required | Lecture ID |
| `video_id` | integer | Required | Video attachment ID |
| `user_id` | integer | Optional | User ID. When provided, current_time and url_progress_tracking are populated if the user has playback progress for this video; otherwise they are null. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_lecture

Delete a lecture in the requested course scope.

CLI: `teachable-cli v2-delete-lecture`. Policy: explicit confirmation.

Native: `DELETE /v2/products/courses/{course_id}/lectures/{lecture_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `lecture_id` | string | Required | Lecture ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_lecture

Retrieve details of a specific lecture in a course.

CLI: `teachable-cli v2-get-lecture`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures/{lecture_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `lecture_id` | string | Required | Lecture ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_lecture

Update a lecture in the requested course scope.

CLI: `teachable-cli v2-update-lecture`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/lectures/{lecture_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `lecture_id` | string | Required | Lecture ID |
| `name` | string (maxLength=300) | Optional | The lecture name. Must not exceed 300 characters. |
| `is_published` | boolean | Optional | Whether the lecture is published. Must be a boolean (true/false). |
| `free_preview` | boolean | Optional | Whether the lecture is available as a free preview. Must be a boolean (true/false). |
| `student_comments_enabled` | boolean | Optional | Whether student comments are enabled for this lecture. Must be a boolean (true/false). |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (maxLength=300) | Optional | The lecture name. Must not exceed 300 characters. |
| is_published | boolean | Optional | Whether the lecture is published. Must be a boolean (true/false). |
| free_preview | boolean | Optional | Whether the lecture is available as a free preview. Must be a boolean (true/false). |
| student_comments_enabled | boolean | Optional | Whether student comments are enabled for this lecture. Must be a boolean (true/false). |

### v2_list_lectures_for_course

Retrieve a list of lectures for a specific course in the current school scope.

CLI: `teachable-cli v2-list-lectures-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/lectures`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `section_id` | integer | Optional | Filter lectures by section ID |
| `name` | string | Optional | Filter lectures by partial name |
| `is_published` | string | Optional | Filter by published state (true, false, 1, 0) |
| `created_after` | string | Optional | Filter lectures created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter lectures created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `sort_by` | string | Optional | Sort by field (position, created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_lecture_in_section

Create a lecture inside a specific section of a course.

CLI: `teachable-cli v2-create-lecture-in-section`. Policy: explicit confirmation.

Native: `POST /v2/products/courses/{course_id}/sections/{section_id}/lectures`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `section_id` | string | Required | Section ID |
| `name` | string | Optional | Native field |
| `is_published` | boolean | Optional | Native field |
| `free_preview` | boolean | Optional | Native field |
| `student_comments_enabled` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| is_published | boolean | Optional | Native field |
| free_preview | boolean | Optional | Native field |
| student_comments_enabled | boolean | Optional | Native field |

### v2_reorder_lectures_in_section

Reorder all lectures inside a specific section.

CLI: `teachable-cli v2-reorder-lectures-in-section`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/sections/{section_id}/lectures`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID |
| `section_id` | string | Required | Section ID |
| `data` | array (minItems=1) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| data | array (minItems=1) | Required | Native field |
| data.[].id | integer | Required | Native field |
| data.[].position | integer | Required | Native field |

### v2_get_course_section

Retrieve details for a specific section in a specific course.

CLI: `teachable-cli v2-get-course-section`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/sections/{section_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `section_id` | string | Required | Section ID (must be a positive integer) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_course_section

Update a section name for a specific course.

CLI: `teachable-cli v2-update-course-section`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}/sections/{section_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `section_id` | string | Required | Section ID (must be a positive integer) |
| `name` | string (maxLength=300) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (maxLength=300) | Required | Native field |

### v2_replace_course_section

Update a section name (same as PATCH; some clients use PUT for updates).

CLI: `teachable-cli v2-replace-course-section`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/sections/{section_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `section_id` | string | Required | Section ID (must be a positive integer) |
| `name` | string (maxLength=300) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (maxLength=300) | Required | Native field |

### v2_list_sections_for_course

Retrieve a list of sections for a specific course. Sections are ordered by position ascending by default.

CLI: `teachable-cli v2-list-sections-for-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/sections`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | position, name, created_at, updated_at | Optional | Sort field (position, name, created_at, updated_at) |
| `sort_direction` | asc, desc | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_section_in_course

Create a new section for a specific course.

CLI: `teachable-cli v2-create-section-in-course`. Policy: explicit confirmation.

Native: `POST /v2/products/courses/{course_id}/sections`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `name` | string (maxLength=300) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (maxLength=300) | Required | Native field |

### v2_reorder_sections_in_course

Reorder all sections for a specific course in a single atomic operation.

CLI: `teachable-cli v2-reorder-sections-in-course`. Policy: explicit confirmation.

Native: `PUT /v2/products/courses/{course_id}/sections`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | string | Required | Course ID (must be a positive integer) |
| `data` | array (minItems=1) | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| data | array (minItems=1) | Required | Native field |
| data.[].id | integer | Required | Native field |
| data.[].position | integer | Required | Native field |

### v2_get_course_progress_for_user

Retrieve the course progress for a specific user in a specific course. The response includes the overall progress percentage, as well as detailed progress information for each section and lecture within the course.

CLI: `teachable-cli v2-get-course-progress-for-user`. Policy: read.

Native: `GET /v2/products/courses/{course_id}/users/{user_id}/progress`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_get_course

Retrieve details of a specific course.

CLI: `teachable-cli v2-get-course`. Policy: read.

Native: `GET /v2/products/courses/{course_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_course

Update an existing course (partial update).

CLI: `teachable-cli v2-update-course`. Policy: explicit confirmation.

Native: `PATCH /v2/products/courses/{course_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `course_id` | integer | Required | Course ID |
| `name` | string (minLength=1, maxLength=200) | Optional | Course name. Cannot be blank when provided. |
| `description` | string nullable (maxLength=255) | Optional | Course subtitle/heading. |
| `is_published` | boolean | Optional | Whether the course is published (accessible to students). |
| `is_listed` | boolean | Optional | Whether the course appears in the school's public catalog. |
| `friendly_url` | string (maxLength=100, pattern=^[a-zA-Z0-9\-_]+$) | Optional | URL slug. Allowed characters: letters, numbers, hyphens (-), and underscores (_). Must be unique within the school. |
| `image_url` | string nullable (maxLength=2048, format=uri) | Optional | Course image URL. Must be a valid HTTP/HTTPS URL. Extension is not restricted (CDN URLs without extensions are accepted). Maximum 2048 characters. Blank or null clears the image. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (minLength=1, maxLength=200) | Optional | Course name. Cannot be blank when provided. |
| description | string nullable (maxLength=255) | Optional | Course subtitle/heading. |
| is_published | boolean | Optional | Whether the course is published (accessible to students). |
| is_listed | boolean | Optional | Whether the course appears in the school's public catalog. |
| friendly_url | string (maxLength=100, pattern=^[a-zA-Z0-9\-_]+$) | Optional | URL slug. Allowed characters: letters, numbers, hyphens (-), and underscores (_). Must be unique within the school. |
| image_url | string nullable (maxLength=2048, format=uri) | Optional | Course image URL. Must be a valid HTTP/HTTPS URL. Extension is not restricted (CDN URLs without extensions are accepted). Maximum 2048 characters. Blank or null clears the image. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |

### v2_list_courses

Retrieve a list of all courses. The list is returned in order of creation date, with the most recently created courses appearing first.

CLI: `teachable-cli v2-list-courses`. Policy: read.

Native: `GET /v2/products/courses`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `is_published` | boolean | Optional | Filter by published state |
| `is_listed` | boolean | Optional | Filter by catalog visibility |
| `author_bio_id` | integer | Optional | Filter by author bio ID |
| `created_after` | string | Optional | Filter courses created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter courses created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `name` | string | Optional | Filter by partial name (case-insensitive) |
| `search` | string | Optional | Search in course name and heading/description (case-insensitive) |
| `sort_by` | string | Optional | Sort field. Allowed values: name, created_at, updated_at. Defaults to created_at. |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `page` | integer (minimum=1) | Optional | Page number (1-based) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (max 100) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_course

Create a new course for the school.

CLI: `teachable-cli v2-create-course`. Policy: explicit confirmation.

Native: `POST /v2/products/courses`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string (minLength=1, maxLength=200) | Optional | Course name. Required. |
| `description` | string nullable (maxLength=255) | Optional | Course subtitle/heading. |
| `is_published` | boolean | Optional | Whether the course is published (accessible to students). Defaults to false. |
| `is_listed` | boolean | Optional | Whether the course appears in the school's public catalog. Defaults to false. |
| `author_bio_id` | integer | Optional | ID of an author bio belonging to the school. Required. Cannot be changed after creation. |
| `friendly_url` | string (maxLength=100, pattern=^[a-zA-Z0-9\-_]+$) | Optional | URL slug for the course. Allowed characters: letters, numbers, hyphens (-), and underscores (_). If omitted, auto-generated from the course name. Must be unique within the school. |
| `image_url` | string nullable (maxLength=2048, format=uri) | Optional | Course image URL. Must be a valid HTTP/HTTPS URL. Extension is not restricted (CDN URLs without extensions are accepted). Maximum 2048 characters. Blank or null clears the image. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string (minLength=1, maxLength=200) | Required | Course name. Required. |
| description | string nullable (maxLength=255) | Optional | Course subtitle/heading. |
| is_published | boolean | Optional | Whether the course is published (accessible to students). Defaults to false. |
| is_listed | boolean | Optional | Whether the course appears in the school's public catalog. Defaults to false. |
| author_bio_id | integer | Required | ID of an author bio belonging to the school. Required. Cannot be changed after creation. |
| friendly_url | string (maxLength=100, pattern=^[a-zA-Z0-9\-_]+$) | Optional | URL slug for the course. Allowed characters: letters, numbers, hyphens (-), and underscores (_). If omitted, auto-generated from the course name. Must be unique within the school. |
| image_url | string nullable (maxLength=2048, format=uri) | Optional | Course image URL. Must be a valid HTTP/HTTPS URL. Extension is not restricted (CDN URLs without extensions are accepted). Maximum 2048 characters. Blank or null clears the image. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |

### v2_delete_attachment_from_digital_download

Delete an attachment. Returns 204 on success.

CLI: `teachable-cli v2-delete-attachment-from-digital-download`. Policy: explicit confirmation.

Native: `DELETE /v2/products/digital-downloads/{digital_download_id}/attachments/{attachment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `attachment_id` | integer | Required | Attachment ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_attachment_for_digital_download

Retrieve a single attachment for a digital download.

CLI: `teachable-cli v2-get-attachment-for-digital-download`. Policy: read.

Native: `GET /v2/products/digital-downloads/{digital_download_id}/attachments/{attachment_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `attachment_id` | integer | Required | Attachment ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_list_attachments_for_digital_download

Retrieve a list of attachments for a digital download.

CLI: `teachable-cli v2-list-attachments-for-digital-download`. Policy: read.

Native: `GET /v2/products/digital-downloads/{digital_download_id}/attachments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `page` | integer (minimum=1) | Optional | Page number (default 1, must be >= 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default 20, must be >= 1, max 100) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_attachment_for_digital_download

Create an attachment (download or redirect) for a digital download. **Business rules:** - All attachments on a digital download must have the same `kind`. You cannot mix download and redirect attachments on the same product. - For `kind: download`: `filename`, `url`, and `size_in_bytes` are required. - For `kind: redirect`: `url` and `button_text` are required. Only one redirect attachment is allowed per digital download.

CLI: `teachable-cli v2-create-attachment-for-digital-download`. Policy: explicit confirmation.

Native: `POST /v2/products/digital-downloads/{digital_download_id}/attachments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `filename` | string nullable | Optional | Required when kind is 'download'. The name of the file. |
| `size_in_bytes` | integer nullable | Optional | Required when kind is 'download'. The size of the file in bytes (must be >= 1). |
| `url` | string nullable | Optional | Required for both kinds. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `kind` | download, redirect | Optional | The type of attachment. All attachments on a digital download must have the same kind. |
| `button_text` | string nullable | Optional | Required when kind is 'redirect'. The text displayed on the redirect button. Maximum 24 characters. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| filename | string nullable | Optional | Required when kind is 'download'. The name of the file. |
| size_in_bytes | integer nullable | Optional | Required when kind is 'download'. The size of the file in bytes (must be >= 1). |
| url | string nullable | Optional | Required for both kinds. External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| kind | download, redirect | Required | The type of attachment. All attachments on a digital download must have the same kind. |
| button_text | string nullable | Optional | Required when kind is 'redirect'. The text displayed on the redirect button. Maximum 24 characters. |

### v2_unenroll_user_from_digital_download

Ensure final state of no active access for a user in a digital download product. This operation is idempotent.

CLI: `teachable-cli v2-unenroll-user-from-digital-download`. Policy: explicit confirmation.

Native: `DELETE /v2/products/digital-downloads/{digital_download_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_enrollment_for_digital_download

Retrieve a single enrollment for a user in a digital download product using the base enrollment contract (without progress).

CLI: `teachable-cli v2-get-enrollment-for-digital-download`. Policy: read.

Native: `GET /v2/products/digital-downloads/{digital_download_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_enroll_user_in_digital_download

Create or ensure active access for a user in a digital download product. This operation is idempotent.

CLI: `teachable-cli v2-enroll-user-in-digital-download`. Policy: explicit confirmation.

Native: `PUT /v2/products/digital-downloads/{digital_download_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_list_enrollments_for_digital_download

Retrieve a list of enrollments for a digital download product using the base enrollment contract (without progress).

CLI: `teachable-cli v2-list-enrollments-for-digital-download`. Policy: read.

Native: `GET /v2/products/digital-downloads/{digital_download_id}/enrollments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `page` | integer (minimum=1) | Optional | Page number (default 1, must be >= 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default 25, must be >= 1, max 100) |
| `sort_by` | string | Optional | Sort field (enrolled_at only) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `enrolled_after` | string | Optional | Filter enrollments with enrolled_at >= ISO8601 value. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `enrolled_before` | string | Optional | Filter enrollments with enrolled_at <= ISO8601 value. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `status` | string | Optional | Filter by status (active, expired, disabled) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_digital_download

Delete a digital download.

CLI: `teachable-cli v2-delete-digital-download`. Policy: explicit confirmation.

Native: `DELETE /v2/products/digital-downloads/{digital_download_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_digital_download

Retrieve details of a specific digital download.

CLI: `teachable-cli v2-get-digital-download`. Policy: read.

Native: `GET /v2/products/digital-downloads/{digital_download_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_digital_download

Update an existing digital download.

CLI: `teachable-cli v2-update-digital-download`. Policy: explicit confirmation.

Native: `PATCH /v2/products/digital-downloads/{digital_download_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `digital_download_id` | integer | Required | Digital Download ID |
| `name` | string | Optional | Native field |
| `description` | string nullable | Optional | Native field |
| `category` | string nullable | Optional | Native field |
| `is_published` | boolean | Optional | Native field |
| `image_url` | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | Native field |
| description | string nullable | Optional | Native field |
| category | string nullable | Optional | Native field |
| is_published | boolean | Optional | Native field |
| image_url | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |

### v2_list_digital_downloads

Retrieve a list of all digital downloads. Default order is by created_at (desc) when no sort is applied; the most recently created digital downloads appear first when sorting by created_at desc.

CLI: `teachable-cli v2-list-digital-downloads`. Policy: read.

Native: `GET /v2/products/digital-downloads`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1) | Optional | Page number (default 1, must be >= 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default 20, must be >= 1, max 100) |
| `sort_by` | string | Optional | Sort by field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `search` | string | Optional | Case-insensitive search on name and description (ILIKE) |
| `name` | string | Optional | Filter by name (ILIKE partial match) |
| `is_published` | string | Optional | Filter by published state (true, false, 1, 0) |
| `author_bio_id` | integer | Optional | Filter by author bio ID |
| `created_after` | string | Optional | Filter with created_at after this time (parseable by Time.zone.parse). Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter with created_at before this time (parseable by Time.zone.parse). Date range between created_after and created_before cannot exceed 90 days. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_digital_download

Create a new digital download.

CLI: `teachable-cli v2-create-digital-download`. Policy: explicit confirmation.

Native: `POST /v2/products/digital-downloads`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | Native field |
| `description` | string nullable | Optional | Native field |
| `category` | string nullable | Optional | Native field |
| `is_published` | boolean | Optional | Native field |
| `author_bio_id` | integer | Optional | Native field |
| `image_url` | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| description | string nullable | Optional | Native field |
| category | string nullable | Optional | Native field |
| is_published | boolean | Optional | Native field |
| author_bio_id | integer | Required | Native field |
| image_url | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |

### v2_unenroll_user_from_product_collection

Disable enrollment into a product collection. Revokes access to all product collection contents. For subscriptions, the billing subscription is also canceled.

CLI: `teachable-cli v2-unenroll-user-from-product-collection`. Policy: explicit confirmation.

Native: `DELETE /v2/products/product-collections/{product_collection_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_enrollment_for_product_collection

Retrieve an enrollment into a product collection for a specific user.

CLI: `teachable-cli v2-get-enrollment-for-product-collection`. Policy: read.

Native: `GET /v2/products/product-collections/{product_collection_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_product_collection_enrollment

Enroll a user in a product collection (same as PUT). Creates a new enrollment when none exists, or reactivates a disabled enrollment.

CLI: `teachable-cli v2-update-product-collection-enrollment`. Policy: explicit confirmation.

Native: `PATCH /v2/products/product-collections/{product_collection_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_enroll_user_in_product_collection

Enroll a user in a product collection. Creates a new enrollment when none exists, or reactivates a disabled enrollment. Gives access to all product collection contents.

CLI: `teachable-cli v2-enroll-user-in-product-collection`. Policy: explicit confirmation.

Native: `PUT /v2/products/product-collections/{product_collection_id}/enrollments/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_list_enrollments_for_product_collection

Retrieve a list of enrollments into a specific product collection. Enrollments are returned in order of enrolled date, with the most recently enrolled appearing first.

CLI: `teachable-cli v2-list-enrollments-for-product-collection`. Policy: read.

Native: `GET /v2/products/product-collections/{product_collection_id}/enrollments`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | string | Optional | Sort field (enrolled_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `enrolled_after` | string | Optional | Filter by enrolled_at after ISO8601 time. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `enrolled_before` | string | Optional | Filter by enrolled_at before ISO8601 time. Date range between enrolled_after and enrolled_before cannot exceed 90 days. |
| `status` | string | Optional | Filter by status (active, disabled) |
| `user_id` | integer | Optional | Filter by enrolled user |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_remove_product_from_product_collection

Remove a specific product from a product collection.

CLI: `teachable-cli v2-remove-product-from-product-collection`. Policy: explicit confirmation.

Native: `DELETE /v2/products/product-collections/{product_collection_id}/products/{product_type}/{product_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `product_type` | string | Required | Product Type (course, coaching, digital_download) |
| `product_id` | integer | Required | Product ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_list_products_in_product_collection

Retrieve a list of products in a specific product collection. Products are returned in order of creation date, with the most recently created products appearing first.

CLI: `teachable-cli v2-list-products-in-product-collection`. Policy: read.

Native: `GET /v2/products/product-collections/{product_collection_id}/products`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `type` | string | Optional | Filter by Product type (course, coaching, digital_download) |
| `page` | integer (minimum=1) | Optional | Page number |
| `limit` | integer (minimum=1, maximum=100) | Optional | Items per page (max 100) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_add_product_to_product_collection

Add products to a product collection. Products are returned in order of creation date, with the most recently created products appearing first.

CLI: `teachable-cli v2-add-product-to-product-collection`. Policy: explicit confirmation.

Native: `POST /v2/products/product-collections/{product_collection_id}/products`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `data` | array | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| data | array | Optional | Native field |
| data.[].id | integer | Required | Native field |
| data.[].type | string | Required | Native field |
| data.[].name | string | Required | Native field |
| data.[].href | string | Required | Native field |
| data.[].created_at | string (format=date-time) | Required | Native field |
| data.[].updated_at | string (format=date-time) | Required | Native field |

### v2_delete_product_collection

Delete a specific product collection.

CLI: `teachable-cli v2-delete-product-collection`. Policy: explicit confirmation.

Native: `DELETE /v2/products/product-collections/{product_collection_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_product_collection

Retrieve details of a specific product collection by its ID.

CLI: `teachable-cli v2-get-product-collection`. Policy: read.

Native: `GET /v2/products/product-collections/{product_collection_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_product_collection

Update details of a specific product collection.

CLI: `teachable-cli v2-update-product-collection`. Policy: explicit confirmation.

Native: `PATCH /v2/products/product-collections/{product_collection_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `name` | string | Optional | Native field |
| `description` | string nullable | Optional | Native field |
| `image_url` | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `is_published` | boolean | Optional | Native field |
| `is_listed` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | Native field |
| description | string nullable | Optional | Native field |
| image_url | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| is_published | boolean | Optional | Native field |
| is_listed | boolean | Optional | Native field |

### v2_replace_product_collection

Update details of a specific product collection (full update via PUT, same behavior as PATCH).

CLI: `teachable-cli v2-replace-product-collection`. Policy: explicit confirmation.

Native: `PUT /v2/products/product-collections/{product_collection_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_collection_id` | integer | Required | Product Collection ID |
| `name` | string | Optional | Native field |
| `description` | string nullable | Optional | Native field |
| `image_url` | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `is_published` | boolean | Optional | Native field |
| `is_listed` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | Native field |
| description | string nullable | Optional | Native field |
| image_url | string nullable (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| is_published | boolean | Optional | Native field |
| is_listed | boolean | Optional | Native field |

### v2_list_product_collections

Retrieve a list of product collections for the school. Product collections are returned in order of creation date, with the most recently created collections appearing first.

CLI: `teachable-cli v2-list-product-collections`. Policy: read.

Native: `GET /v2/products/product-collections`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `sort_by` | string | Optional | Sort by field (created_at, updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_product_collection

Create a product collection scoped to current school.

CLI: `teachable-cli v2-create-product-collection`. Policy: explicit confirmation.

Native: `POST /v2/products/product-collections`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | Native field |
| `description` | string | Optional | Native field |
| `image_url` | string (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| `is_published` | boolean | Optional | Native field |
| `is_listed` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| description | string | Optional | Native field |
| image_url | string (format=uri) | Optional | External URLs are referenced directly and are not downloaded or re-hosted by Teachable. Only files uploaded via the POST /v2/uploads endpoint are stored on Teachable's CDN. The caller is responsible for ensuring externally-hosted media remains available at the provided URL. |
| is_published | boolean | Optional | Native field |
| is_listed | boolean | Optional | Native field |

### v2_list_products

Retrieve a list of all products across all product types. The list is returned in order of creation date, with the most recently created products appearing first.

CLI: `teachable-cli v2-list-products`. Policy: read.

Native: `GET /v2/products`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1) | Optional | Page number (1-based) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (max 100) |
| `is_published` | boolean | Optional | Filter by published state |
| `author_bio_id` | string | Optional | Filter by author bio ID |
| `created_after` | string | Optional | Filter products created after this time (parseable datetime string). Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter products created before this time (parseable datetime string). Date range between created_after and created_before cannot exceed 90 days. |
| `name` | string | Optional | Filter by product name (partial match) |
| `search` | string | Optional | Search in product name and description (partial match) |
| `sort_by` | string | Optional | Sort field (created_at or updated_at) |
| `sort_direction` | string | Optional | Sort direction (asc or desc) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_get_purchase

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a single purchase by ID for the current school.

CLI: `teachable-cli v2-get-purchase`. Policy: read.

Native: `GET /v2/purchases/{purchase_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `purchase_id` | integer | Required | Purchase ID |
| `user_id` | integer | Optional | Filter by user ID to verify the purchase belongs to a specific user |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_list_purchases

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a paginated list of purchases for the current school.

CLI: `teachable-cli v2-list-purchases`. Policy: read.

Native: `GET /v2/purchases`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1) | Optional | Page number (default: 1, min: 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default: 25, min: 1, max: 100) |
| `purchased_after` | string | Optional | Filter purchases after this ISO8601 datetime. Date range between purchased_after and purchased_before cannot exceed 90 days. |
| `purchased_before` | string | Optional | Filter purchases before this ISO8601 datetime. Date range between purchased_after and purchased_before cannot exceed 90 days. |
| `product_type` | string | Optional | Filter by product type (course, digital_download, coaching, bundle, membership) |
| `product_id` | integer | Optional | Filter by product entity id; must be sent together with product_type |
| `payment_method` | stripe, paypal, free, coupon, external, admin, multi_school_bundle, voucher, external-api | Optional | Filter by payment method |
| `is_active` | boolean | Optional | Filter active/inactive purchases |
| `is_recurring` | boolean | Optional | Filter recurring/one-time purchases |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_get_transaction

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a single transaction by ID for the current school.

CLI: `teachable-cli v2-get-transaction`. Policy: read.

Native: `GET /v2/transactions/{transaction_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `transaction_id` | integer | Required | Transaction ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_list_transactions

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a paginated list of transactions for the current school.

CLI: `teachable-cli v2-list-transactions`. Policy: read.

Native: `GET /v2/transactions`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | string | Optional | Filter by user ID |
| `affiliate_id` | string | Optional | Filter by affiliate ID |
| `course_id` | string | Optional | Filter by course ID |
| `pricing_plan_id` | string | Optional | Filter by pricing plan ID |
| `purchase_id` | string | Optional | Filter by purchase (sale) ID |
| `is_fully_refunded` | boolean | Optional | Filter fully refunded transactions |
| `was_charged_back` | boolean | Optional | Filter chargeback transactions |
| `created_after` | string | Optional | Filter transactions created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_before` | string | Optional | Filter transactions created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `page` | integer (minimum=1) | Optional | Page number |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_pre_signed_upload_credentials

Generate pre-signed credentials for uploading files directly to cloud storage.

## Workflow

1. **Request credentials**: Call this endpoint with the resource `type`, `id`, `purpose`, and file `extension`
2. **Upload your file**: Use the response fields to upload directly to the storage provider
3. **Update the resource**: After upload completes, update the resource with the returned `url` (e.g., `PATCH /v2/courses/{id}` with `thumbnail_url`)

## How to Upload

Build your upload request using the response fields:

1. Send a request to `upload_url` using `upload_method`
2. Set all headers from `upload_headers` (includes `Content-Type`)
3. Include each key-value pair from `upload_body` in your request body
4. Include your file using the field name from `file_field_name`

> **Note:** Serialize `upload_body` according to the `Content-Type` header. If `file_field_name` is present, include your file as a field with that name alongside the `upload_body` fields. If `file_field_name` is `null`, send the file as the raw request body.

### Example

```bash
# 1. Request upload credentials
curl -X POST "https://developers.teachable.com/v2/uploads" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"type": "course", "id": 123, "purpose": "thumbnail", "extension": "jpg"}'

# Response:
# {
#   "upload_url": "https://api2.transloadit.com/assemblies",
#   "upload_method": "POST",
#   "upload_headers": {"Content-Type": "multipart/form-data"},
#   "upload_body": {"params": "...", "signature": "..."},
#   "file_field_name": "file",
#   "url": "https://cdn.teachablecdn.com/...",
#   "expires": "2024-01-01T13:00:00Z",
#   "upload_id": "abc-123"
# }

# 2. Upload the file using the credentials
curl -X POST "https://api2.transloadit.com/assemblies" \
  -H "Content-Type: multipart/form-data" \
  -F "params=..." \
  -F "signature=..." \
  -F "file=@/path/to/image.jpg"

# 3. Update the resource with the CDN URL
curl -X PATCH "https://developers.teachable.com/v2/courses/123" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"thumbnail_url": "https://cdn.teachablecdn.com/..."}'
```

## Response Fields

| Field | Description |
|-------|-------------|
| `upload_url` | The endpoint URL to send your file to |
| `upload_method` | HTTP method to use (e.g., `POST`, `PUT`) |
| `upload_headers` | Headers to include in your upload request (e.g., `Content-Type`) |
| `upload_body` | Key-value pairs to include in your request body (serialize per `Content-Type`), or `null` if not needed |
| `file_field_name` | The field name to use for your file (e.g., `file`), or `null` if the file is sent as the raw request body |
| `url` | The CDN URL where your file will be available after upload. Use this to update the resource. |
| `expires` | When the credentials expire (ISO 8601). Upload before this time. |
| `upload_id` | Unique identifier for this upload request |

## Supported Resources

| Type | Purpose | Description |
|------|---------|-------------|
| `course` | `thumbnail` | Course cover image |
| `product_collection` | `thumbnail` | Learning path cover image |
| `digital_download` | `thumbnail` | Digital product cover image |
| `digital_download` | `attachment` | Downloadable file for customers |
| `lecture` | `attachment` | Lecture file (PDF, video, etc.) |
| `membership` | `thumbnail` | Membership cover image |
| `coaching` | `thumbnail` | Coaching product cover image |

## Constraints

- **Maximum file size**: 20 GB
- **Extension**: 1-10 alphanumeric characters (e.g., `jpg`, `pdf`, `mp4`)
- **Credentials expire**: 1 hour after creation


CLI: `teachable-cli v2-create-pre-signed-upload-credentials`. Policy: explicit confirmation.

Native: `POST /v2/uploads`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | oneOf | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |
| `output_file` | string (minLength=1) | Required | Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| variant 1 | object | Choose one | Native oneOf |
| variant1.type | course | Required | The resource type to upload for. |
| variant1.id | integer (minimum=1) | Required | The ID of the resource. |
| variant1.purpose | thumbnail | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant1.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |
| variant 2 | object | Choose one | Native oneOf |
| variant2.type | product_collection | Required | The resource type to upload for. |
| variant2.id | integer (minimum=1) | Required | The ID of the resource. |
| variant2.purpose | thumbnail | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant2.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |
| variant 3 | object | Choose one | Native oneOf |
| variant3.type | digital_download | Required | The resource type to upload for. |
| variant3.id | integer (minimum=1) | Required | The ID of the resource. |
| variant3.purpose | thumbnail, attachment | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant3.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |
| variant 4 | object | Choose one | Native oneOf |
| variant4.type | lecture | Required | The resource type to upload for. |
| variant4.id | integer (minimum=1) | Required | The ID of the resource. |
| variant4.purpose | attachment | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant4.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |
| variant 5 | object | Choose one | Native oneOf |
| variant5.type | membership | Required | The resource type to upload for. |
| variant5.id | integer (minimum=1) | Required | The ID of the resource. |
| variant5.purpose | thumbnail | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant5.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |
| variant 6 | object | Choose one | Native oneOf |
| variant6.type | coaching | Required | The resource type to upload for. |
| variant6.id | integer (minimum=1) | Required | The ID of the resource. |
| variant6.purpose | thumbnail | Required | The purpose of the upload (e.g., thumbnail, attachment). |
| variant6.extension | string (pattern=^[a-zA-Z0-9]{1,10}$) | Required | File extension without the dot (e.g., 'jpg', 'pdf', 'mp4'). Case-insensitive, 1-10 alphanumeric characters. |

### v2_list_purchases_for_user

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a paginated list of purchases for a specific user.

CLI: `teachable-cli v2-list-purchases-for-user`. Policy: read.

Native: `GET /v2/users/{user_id}/purchases`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `page` | integer (minimum=1) | Optional | Page number (default: 1, min: 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default: 25, min: 1, max: 100) |
| `purchased_after` | string | Optional | Filter purchases after this ISO8601 datetime. Date range between purchased_after and purchased_before cannot exceed 90 days. |
| `purchased_before` | string | Optional | Filter purchases before this ISO8601 datetime. Date range between purchased_after and purchased_before cannot exceed 90 days. |
| `product_type` | string | Optional | Filter by product type (course, digital_download, coaching, bundle, membership) |
| `product_id` | integer | Optional | Filter by product entity id; must be sent together with product_type |
| `is_active` | boolean | Optional | Filter active/inactive purchases |
| `is_recurring` | boolean | Optional | Filter recurring/one-time purchases |
| `payment_method` | stripe, paypal, free, coupon, external, admin, multi_school_bundle, voucher, external-api | Optional | Filter by payment method |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_list_quiz_responses_for_user

> **🚧 Beta:** This endpoint may not be available yet and may change without notice.
> Contact support to request access.

Retrieve a paginated history of quiz responses for a specific user.

CLI: `teachable-cli v2-list-quiz-responses-for-user`. Policy: read.

Native: `GET /v2/users/{user_id}/quiz-responses`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID. Malformed values return 400; missing users return 404. |
| `lecture_id` | integer | Optional | Lecture ID filter; returns 404 when the lecture does not exist, 400 when the value is not an integer |
| `course_id` | integer | Optional | Course ID filter; returns 404 when the course does not exist, 400 when the value is not an integer |
| `sort_by` | string | Optional | Sort field (submitted_at, updated_at, created_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `include_answers` | string | Optional | When true, include the submitted answers object on each quiz response. Omit or set to false to exclude answers (default). |
| `submitted_after` | string | Optional | ISO8601 datetime; invalid values return 400. Date range between submitted_after and submitted_before cannot exceed 90 days. |
| `submitted_before` | string | Optional | ISO8601 datetime; invalid values return 400. Date range between submitted_after and submitted_before cannot exceed 90 days. |
| `page` | integer (minimum=1) | Optional | Page number (default: 1, min: 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default: 20, min: 1, max: 100) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_revoke_user_session

Revoke a single user session.

CLI: `teachable-cli v2-revoke-user-session`. Policy: explicit confirmation.

Native: `DELETE /v2/users/{user_id}/sessions/{session_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `session_id` | string | Required | Session ID (UUID) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_revoke_user_sessions

Revoke all active sessions for a user.

CLI: `teachable-cli v2-revoke-user-sessions`. Policy: explicit confirmation.

Native: `DELETE /v2/users/{user_id}/sessions`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_list_user_sessions

Retrieve a paginated list of active sessions for a specific user.

CLI: `teachable-cli v2-list-user-sessions`. Policy: read.

Native: `GET /v2/users/{user_id}/sessions`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `last_seen_after` | string | Optional | ISO8601 datetime; sessions last seen at or after this time. Date range between last_seen_after and last_seen_before cannot exceed 90 days. |
| `last_seen_before` | string | Optional | ISO8601 datetime; sessions last seen at or before this time. Date range between last_seen_after and last_seen_before cannot exceed 90 days. |
| `page` | integer (minimum=1) | Optional | Page number (default: 1, min: 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default: 25, min: 1, max: 100) |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_delete_user

Delete a single user for the current school.

CLI: `teachable-cli v2-delete-user`. Policy: explicit confirmation.

Native: `DELETE /v2/users/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### v2_get_user

Retrieve a single user by id for the current school.

CLI: `teachable-cli v2-get-user`. Policy: read.

Native: `GET /v2/users/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_update_user

Update a single user for the current school.

CLI: `teachable-cli v2-update-user`. Policy: explicit confirmation.

Native: `PATCH /v2/users/{user_id}`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `user_id` | integer | Required | User ID |
| `name` | string nullable | Optional | Native field |
| `email` | string nullable | Optional | Native field |
| `role` | student, owner, author, affiliate | Optional | Allowed values: student, owner, author, affiliate. Omit to preserve the current role. |
| `allow_marketing_emails` | boolean | Optional | Optional. When omitted on update, the existing preference is preserved. |
| `author_revenue_share` | number nullable | Optional | Native field |
| `affiliate_revenue_share` | number nullable | Optional | Native field |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string nullable | Optional | Native field |
| email | string nullable | Optional | Native field |
| password | string nullable | Optional | Native field |
| role | student, owner, author, affiliate | Optional | Allowed values: student, owner, author, affiliate. Omit to preserve the current role. |
| allow_marketing_emails | boolean | Optional | Optional. When omitted on update, the existing preference is preserved. |
| author_revenue_share | number nullable | Optional | Native field |
| affiliate_revenue_share | number nullable | Optional | Native field |

### v2_list_users

Retrieve a paginated list of users for the current school.

CLI: `teachable-cli v2-list-users`. Policy: read.

Native: `GET /v2/users`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1) | Optional | Page number (default: 1, min: 1) |
| `per_page` | integer (minimum=1, maximum=100) | Optional | Items per page (default: 25, min: 1, max: 100) |
| `sort_by` | string | Optional | Sort key (id, name, email, created_at, updated_at, last_sign_in_at) |
| `sort_direction` | string | Optional | Sort direction (asc, desc) |
| `name` | string | Optional | Filter by user name |
| `email` | string | Optional | Filter by user email |
| `role` | string | Optional | Filter by user role. Allowed values: owner, author, affiliate, student, custom. Returns empty results for unrecognized values. |
| `created_before` | string | Optional | Filter users created before this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `created_after` | string | Optional | Filter users created after this ISO8601 datetime. Date range between created_after and created_before cannot exceed 90 days. |
| `user_id` | string | Optional | Filter by user id |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### v2_create_user

Create a single user for the current school.

CLI: `teachable-cli v2-create-user`. Policy: explicit confirmation.

Native: `POST /v2/users`. Version: explicit beta v2. [Current source](https://docs.teachable.com/v2.0/reference).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | Native field |
| `email` | string | Optional | Native field |
| `role` | student, owner, author, affiliate | Optional | Allowed values: student, owner, author, affiliate |
| `allow_marketing_emails` | boolean | Optional | Required when role is 'student'. Optional for other roles. |
| `notes` | string nullable | Optional | Native field |
| `author_revenue_share` | number nullable | Optional | Required when role is 'author'. Decimal between 0 and 1 (e.g. 0.3 = 30%). Must not be provided for other roles. |
| `affiliate_revenue_share` | number nullable | Optional | Required when role is 'affiliate'. Decimal between 0 and 1. Must not be provided for other roles. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native JSON fields below must satisfy their required fields and chosen variants. Use flat body flags, payload OR payload_file. Passwords require owner-private payload_file. Inspect the complete machine schema before effects.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| email | string | Required | Native field |
| password | string nullable | Optional | Native field |
| role | student, owner, author, affiliate | Required | Allowed values: student, owner, author, affiliate |
| allow_marketing_emails | boolean | Optional | Required when role is 'student'. Optional for other roles. |
| notes | string nullable | Optional | Native field |
| author_revenue_share | number nullable | Optional | Required when role is 'author'. Decimal between 0 and 1 (e.g. 0.3 = 30%). Must not be provided for other roles. |
| affiliate_revenue_share | number nullable | Optional | Required when role is 'affiliate'. Decimal between 0 and 1. Must not be provided for other roles. |

### list_accounts

Local labels/default/version/auth source availability only. No credential values, paths, provider identity or network.

CLI: `teachable-cli list-accounts`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |

### get_operation_schema

Local reviewed native method/path/query/body/scopes/rate limit and pinned schema provenance. No provider access or authority proof.

CLI: `teachable-cli get-operation-schema`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `operation` | list_enrollments, mark_lecture_complete, list_quiz_responses, get_quiz, list_quizzes, get_video, get_lecture, get_course_progress, get_course, list_courses, create_enrollment, get_pricing_plan, list_pricing_plans, list_transactions, unenroll_user, get_user, update_user, list_users, create_user, get_webhook_events, list_webhooks, v2_get_school_customizations, v2_delete_pricing_plan, v2_get_pricing_plan, v2_update_pricing_plan, v2_list_pricing_plans_for_product, v2_create_pricing_plan_for_product, v2_delete_coupon, v2_get_coupon, v2_update_coupon, v2_list_coupons, v2_create_coupon, v2_list_comments_for_course, v2_get_compliance_settings_for_course, v2_update_compliance_settings_for_course, v2_unenroll_user_from_course, v2_get_user_s_enrollments_for_course, v2_update_course_enrollment, v2_enroll_user_in_course, v2_list_enrollments_for_course, v2_delete_content_attachment_from_lesson_lecture, v2_get_content_attachment_for_lesson_lecture, v2_update_content_attachment_for_lesson_lecture, v2_list_content_attachments_for_lesson_lecture, v2_create_content_attachment_for_lesson_lecture, v2_reorder_content_attachments_in_lesson_lecture, v2_delete_lecture_comment, v2_update_comment_moderation_status, v2_list_comments_for_lecture, v2_create_comment_on_lecture, v2_list_responses_for_lecture_quiz, v2_delete_lecture_quiz, v2_get_lecture_quiz, v2_list_quizzes_for_lecture, v2_mark_lecture_as_not_completed_for_user, v2_get_lecture_completion_status_for_user, v2_mark_lecture_as_completed_for_user, v2_get_video_for_lecture, v2_delete_lecture, v2_get_lecture, v2_update_lecture, v2_list_lectures_for_course, v2_create_lecture_in_section, v2_reorder_lectures_in_section, v2_get_course_section, v2_update_course_section, v2_replace_course_section, v2_list_sections_for_course, v2_create_section_in_course, v2_reorder_sections_in_course, v2_get_course_progress_for_user, v2_get_course, v2_update_course, v2_list_courses, v2_create_course, v2_delete_attachment_from_digital_download, v2_get_attachment_for_digital_download, v2_list_attachments_for_digital_download, v2_create_attachment_for_digital_download, v2_unenroll_user_from_digital_download, v2_get_enrollment_for_digital_download, v2_enroll_user_in_digital_download, v2_list_enrollments_for_digital_download, v2_delete_digital_download, v2_get_digital_download, v2_update_digital_download, v2_list_digital_downloads, v2_create_digital_download, v2_unenroll_user_from_product_collection, v2_get_enrollment_for_product_collection, v2_update_product_collection_enrollment, v2_enroll_user_in_product_collection, v2_list_enrollments_for_product_collection, v2_remove_product_from_product_collection, v2_list_products_in_product_collection, v2_add_product_to_product_collection, v2_delete_product_collection, v2_get_product_collection, v2_update_product_collection, v2_replace_product_collection, v2_list_product_collections, v2_create_product_collection, v2_list_products, v2_get_purchase, v2_list_purchases, v2_get_transaction, v2_list_transactions, v2_create_pre_signed_upload_credentials, v2_list_purchases_for_user, v2_list_quiz_responses_for_user, v2_revoke_user_session, v2_revoke_user_sessions, v2_list_user_sessions, v2_delete_user, v2_get_user, v2_update_user, v2_list_users, v2_create_user | Required | Native field |

### preview_school_batch

Validate every exact request and hash order/profile label/schema locally. No native request, credential loading, ownership check or provider preview.

CLI: `teachable-cli preview-school-batch`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `tasks` | array (minItems=1, maxItems=20) | Required | One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |

### submit_school_batch

Confirmed ordered effects; all validated/hash checked before first request. Stop on first failure with known and unattempted receipts; no retry, rollback or implicit continuation.

CLI: `teachable-cli submit-school-batch`. Policy: explicit confirmation.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `tasks` | array (minItems=1, maxItems=20) | Required | One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `review_sha256` | string (pattern=^[a-f0-9]{64}$) | Required | Native field |

### export_resources

Confirmed reviewed native page/per or page/per_page export into a new exclusive0600 file. Page/item/5MiB budgets and explicit continuation; no signed links followed or binary download. Not an atomic backup.

CLI: `teachable-cli export-resources`. Policy: explicit confirmation.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `operation` | list_courses, list_pricing_plans, list_transactions, list_users, get_webhook_events, v2_list_pricing_plans_for_product, v2_list_coupons, v2_list_comments_for_course, v2_get_user_s_enrollments_for_course, v2_list_enrollments_for_course, v2_list_content_attachments_for_lesson_lecture, v2_list_comments_for_lecture, v2_list_quizzes_for_lecture, v2_list_lectures_for_course, v2_list_sections_for_course, v2_list_courses, v2_list_attachments_for_digital_download, v2_list_enrollments_for_digital_download, v2_list_digital_downloads, v2_list_enrollments_for_product_collection, v2_list_product_collections, v2_list_products, v2_list_purchases, v2_list_transactions, v2_list_purchases_for_user, v2_list_quiz_responses_for_user, v2_list_user_sessions, v2_list_users | Required | Native field |
| `arguments` | object | Optional | Current native list arguments; cannot override profile/policy/output. |
| `account` | string | Optional | Exact private school profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `start_offset` | integer (minimum=0, maximum=99) | Optional | Native field |
| `max_pages` | integer (minimum=1, maximum=100) | Optional | Native field |
| `max_items` | integer (minimum=1, maximum=10000) | Optional | Native field |
| `output_file` | string (minLength=1) | Required | Native field |


## 7. Writing safely

Every provider or private-output effect requires `confirm:true` in MCP or `--confirm` in CLI. Read-only hides and directly refuses effects, and `TEACHABLE_ALLOW_DESTRUCTIVE=0` refuses them even with approval. Local confirmation does not supply provider authorization, customer permission, marketing consent or financial entitlement.

Read the intended records and inspect the operation schema before preparing effects. Course publishing, enrollment access, user deletion, session revocation and pricing changes can affect people immediately. Only carry out the action the user asked for. Teachable determines whether a key, role, scope and school plan allow it.

No operation retries automatically. A timeout or malformed receipt can leave an unknown outcome; inspect native state before deliberately repeating. Local pacing defaults to one second and a 30-second request timeout. Other processes still share provider quotas.

## 8. API versions and native workflows

Stable v1 remains under `/v1`; opt-in v2 is request-access beta under `/v2`. Set `TEACHABLE_ENABLE_V2=1` to expose v2_ tasks and configure an explicit `api_version:"2"` profile. Merely enabling discovery does not grant access or change a version 1 profile.

V1 enrollment creation is `POST /v1/enroll` with flat `user_id` and `course_id`; it is not the legacy `/enrollments` wrapper. User creation uses flat `email`, `name`, `password` and `src`, with no guessed role field. Pricing lists use `/v1/pricing_plans`. Course enrollment listing has native enrolled_in_after/enrolled_in_before/sort_direction filters, without invented page/per arguments.

```bash
teachable-cli get-operation-schema --operation create_enrollment --agent
teachable-cli create-enrollment --course-id 7 --user-id 9 --account intended-school --confirm --agent
teachable-cli v2-list-lectures-for-course --course-id 7 --account intended-beta-school --agent
```

V2 route IDs retain the reviewed schema's types; some are strings. The dedicated CLI parses them accordingly. For user creation, explicit student marketing consent is required, and author/affiliate shares are native decimal fractions between 0 and 1. User passwords can only be read from a private payload file; there is no password flag or inline-payload password route.

V2 coupon deletion archives a multiple-use coupon rather than deleting its historical record. Coupon creation has mutually exclusive scope shapes, and new-payment schools have additional expiry, inventory and discount requirements. Some coupon updates on those schools only propagate name. Review the full native description and [coupon reference](https://docs.teachable.com/v2.0/reference/post_v2-products-coupons); this package cannot infer the school's payments entitlement.

The v2_create_pre_signed_upload_credentials workflow here requests signed credentials into a new private file. Transfer bytes according to the native storage receipt separately, then use a deliberate content attachment/update step. No byte uploader or automatic course publishing is advertised.

## 9. Several accounts and reviewed batches

`TEACHABLE_ACCOUNTS` is a private array of unique named school profiles: name, api_version (1 default) and one api_key or credentials_file source. Named profiles never inherit global keys. `TEACHABLE_DEFAULT_ACCOUNT` and `--account` select exact labels. Local discovery exposes source availability and version, not keys, paths, provider identity or ownership.

Preview validates 1–20 exact ordered native effects locally. It never loads credentials or contacts a school. Mutable payload files and private output operations are excluded, and nested account/confirm/output overrides are refused.

```bash
teachable-cli preview-school-batch --tasks '{"tool":"create_enrollment","arguments":{"course_id":7,"user_id":9}}' --account intended-school --agent
teachable-cli submit-school-batch --tasks '{"tool":"create_enrollment","arguments":{"course_id":7,"user_id":9}}' --review-sha256 REVIEWED_64_CHARACTER_HASH --account intended-school --confirm --agent
```

The repeatable JSON task flag forms the tasks array. Use the actual hash from your preview. It binds prepared request content, order, profile label, version and pinned schema. It does not bind credential file contents or provider state, expire or guarantee single-use execution. Re-review after state or credential changes.

Execution checks all requests and the hash before fetching. It stops at the first failure with known receipts, the failed index and unattempted indices, preserving native error status. There is no transaction, rollback or implicit continuation.

## 10. Pagination and private exports

Native v1 pages use page/per and v2 pages use page/per_page, starting at 1. Response counters differ: v1 meta.number_of_pages and resource arrays, v2 meta.total_pages and data arrays. Only the 28 reviewed contracts with the complete pagination shape are eligible for export; course-enrollment v1 listing is excluded.

```bash
teachable-cli export-resources --operation list_courses --arguments '{"page":1,"per":100}' --max-pages 10 --max-items 1000 --output-file /absolute/private/courses.json --account intended-school --confirm --agent
```

Defaults are ten pages and 1,000 items; maxima are 100 pages, 10,000 items and 5 MiB. Native page size is capped locally at 100. Partial pages return a native page plus start_offset, so continuation does not silently discard remaining rows. Wrong counters, empty intermediate pages and changed offsets refuse completion claims.

V1 users document search_after for more than 10,000 records. The helper does not invent a cursor; it caps that window and preserves explicitly supplied arguments for deliberate continuation. A complete result applies only to the requested filters and provider response window.

Output uses a NEW absolute path, exclusive creation and POSIX 0600 permissions. Existing files and target symlinks are never overwritten. Failures remove the partial new file. Customer names/emails remain private metadata even after credential/signed-URL redaction. Exports are not atomic snapshots, binary downloads or guaranteed backups while data changes.

## 11. How it works

The SDK stdio server and CLI in-memory bridge execute the same tools and guard. Tool schemas derive from reviewed native parameters/body variants; Ajv validates arguments and bodies before fetching. Method/path/version allowlists prevent arbitrary-host key forwarding and silent API fallback. Path-level and operation-level parameters both matter.

Five local helpers provide profile discovery, contract inspection, review/submit batches and bounded metadata exports. No community runtime or private legacy Git history is copied. The provenance file pins the transformed schema and the two original source snapshot hashes.

```bash
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
```

CI covers Node 22/24 on macOS, Windows and Linux plus desktop packaging. These checks establish local behavior and artifacts. School account outcomes, actual GUI installation and completed Codex task/token measurements remain separately tracked. The sync check verifies the pinned snapshot; it never silently regenerates an unreviewed upstream contract.

## 12. Your data

This is local software with no hosted service or telemetry. Admin keys are sent as apiKey only to developers.teachable.com. Redirects are refused. Credentials come from private runtime settings or bounded owner-private files. Named profiles never inherit another source.

Known keys/passwords and credential-like or signed-URL fields are redacted from ordinary output and errors. Raw upload credentials are intentionally saved only to the requested new private receipt file. The helper never follows those storage URLs. Emails, names, notes, transactions and other ordinary school fields are not anonymized; keep them private.

Provider text and URLs are untrusted data, not instructions. Best-effort audit logs contain static guard decisions, without payloads or credentials. They are not account-action ledgers. Uninstalling does not revoke keys or reverse changes; revoke keys in Teachable and restart runtimes.

## 13. Official and community comparison

Teachable's [official remote MCP](https://docs.teachable.com/v2.0/docs/mcp) already supports documentation search and authenticated account requests. Credential-free discovery found seven v1/five v2 meta-tools, including generic execute-request. These are interface counts, not native API coverage. Official Admin apiKey and separately obtained end-user OAuth bearer are distinct; the remote server does not run or refresh the end-user OAuth flow.

| Requirement | This companion | Existing alternatives |
| --- | --- | --- |
| Admin API tasks | 21 stable plus 97 explicit beta native contracts | Official generic endpoint execution and docs search |
| End-user OAuth | Not implemented | Official MCP accepts a separately obtained bearer |
| Terminal | Dedicated schemas/help over shared handlers | Generic MCP terminal clients also exist |
| School selection | Exact isolated profile label and API version | Credential/client setup remains the user's responsibility |
| Approval | Per-call confirmation, direct read-only refusal | Provider permissions and client approvals remain separate |
| Repeated effects | Exact local batch review, stop-on-failure receipts | No transaction/state-lock claim |
| Export | Bounded private native-page export and offset resume | No atomic backup or binary download claim |
| Beta | Hidden default, explicitly pinned version, no fallback | Provider request-access and new scoped key may be required |
| Efficiency | No matched completed task benchmark yet | Tool counts are not token savings |

The pinned [ahmedrowaihi/teachable-mcp-server](https://github.com/ahmedrowaihi/teachable-mcp-server) source at 5d722b2987a8b745d50e2d49f58589ca51a10002 declares 21 v1 operations and one stdio server binary, without task CLI dispatch in the reviewed source. That is not proof no CLI exists elsewhere. Generic [wong2/mcp-cli](https://github.com/wong2/mcp-cli) is a terminal alternative; its reviewed source already supports remote interactive OAuth. See [COMPARISON.md](COMPARISON.md) for evidence and limits.

## 14. Versions and migration

| Component | Version or evidence |
| --- | --- |
| Package and desktop | 2.0.0 |
| Node runtime | >=22 |
| Native contracts | Stable v1 and request-access beta v2, checked 2026-10-04 |
| Native operations | 21 v1 / 97 v2 |
| Shared helpers | 5 |
| Legacy compatibility | 11 supported names retained; 3 unsupported v1 routes retired |
| Default discovery | 26 tasks / 19 reads / 7 confirmed effects |
| Explicit beta discovery | 123 tasks / 64 reads / 59 confirmed effects |
| Provider, GUI and task-token outcomes | Separate acceptance, never inferred from fixtures |

Upgrade scripts by inspecting schema/--help. The old create_enrollment path/wrapper, create_user wrapper, course-scoped pricing list and guessed pagination are corrected. list_lectures becomes an explicitly enabled beta lecture-list task; there is no silent v1 fallback. create_webhook/delete_webhook are absent from reviewed current Admin contracts and are retired.

All effects now require confirmation. Passwords need private payload_file input; signed upload credentials need a new private output_file. Named profiles pin versions and never inherit global keys. Preserve the older private history separately. [CHANGELOG.md](CHANGELOG.md) records the breaking refresh.

## 15. Environment variables and removal

| Setting | Meaning |
| --- | --- |
| TEACHABLE_API_KEY | Private existing Admin key, one source |
| TEACHABLE_CREDENTIALS_FILE | Absolute owner-private regular JSON with api_key, at most64KiB |
| TEACHABLE_ACCOUNTS | Private isolated named-profile array |
| TEACHABLE_DEFAULT_ACCOUNT | Exact default label |
| TEACHABLE_API_VERSION | Single-profile version1 default, or explicit2 |
| TEACHABLE_ENABLE_V2 | 1/true exposes beta tasks; provider access still required |
| TEACHABLE_READ_ONLY | 1/true hides and directly refuses effects |
| TEACHABLE_ALLOW_DESTRUCTIVE | 0/false refuses even confirmed effects |
| TEACHABLE_AUDIT_LOG | Optional best-effort static guard decision log |
| TEACHABLE_REQUEST_TIMEOUT_MS | 30000 default; local range100–300000 |
| TEACHABLE_MIN_REQUEST_INTERVAL_MS | 1000 default; local range0–10000 |

No arbitrary base-URL setting is supported. Named profiles ignore single-profile credential/version globals. To update, install @latest, inspect the changelog and reconnect. Check that package, desktop manifest and release tag versions match.

Remove the MCP entry through the client settings or `codex mcp remove teachable`, and uninstall the global package with `npm uninstall -g @thenavidm/teachable-mcp-cli`. Remove a desktop extension separately. Neither removal revokes provider keys or reverses account effects. Keep any private files under your own retention policy.

## 16. Risks

School keys may authorize changes that affect access, publishing and revenue. Local confirmation does not establish entitlement, customer consent or intended school identity. Beta contracts may change without notice, and a package update requires reviewed native changes.

Requests/body files are capped locally at 1 MiB and responses/exports/private receipts at 5 MiB. Local pacing and timeout are process controls rather than global provider quotas. Ambiguous failures are not retried automatically. A native receipt is not independent delivery, publication, settlement or enrollment-access proof.

Production SDK/Ajv dependencies are separate from the build-only desktop packer. The reviewed packer currently depends on node-forge1.4.0 with an unpatched signature-verification advisory; it is excluded from npm runtime and bundled production dependencies. Packaging here does not sign or verify third-party bundles. See [security advisory](https://github.com/advisories/GHSA-86w9-cpqp-85rv). Do not claim a clean full development dependency audit.

## 17. Troubleshooting

| Symptom | Check |
| --- | --- |
| Missing config | Select exactly one private key source in the launching runtime |
| API401/403 | Check revocation, key permissions, school eligibility and selected version |
| Beta hidden | Enable beta explicitly and obtain provider request access |
| Version mismatch | Choose an exact matching profile; no fallback is attempted |
| 429 | Respect provider quotas; inspect effects before deliberate retry |
| Unknown flag | Inspect schema/help; guessed legacy wrappers are refused |
| Password refused | Use an owner-private payload_file, outside repositories |
| Existing output | Select a new private path; the helper never overwrites |
| Invalid pagination | Inspect native filters/counters; no completeness claim is made |
| Malformed receipt/timeout | Inspect native state before repeating an effect |
| GUI cannot find npx | Check Node/PATH or use absolute executable and installed entry point |

Report sanitized reproductions through [issues](https://github.com/thenavidm/teachable-mcp-cli/issues). Use private security reporting for sensitive cases. Never attach keys, user-password files, signed receipts or school exports.

## 18. FAQ

<details>
<summary><b>What is the Teachable MCP server?</b></summary>

A local stdio program for reviewed Teachable Admin API tasks. Stable v 1 exposes 26 tasks:21 native operations and 5 local helpers. Explicit beta opt-in exposes 123 total tasks, adding 97 v 2 Admin operations. The CLI calls the same handlers.

</details>

<details>
<summary><b>What is the Teachable CLI?</b></summary>

The same discovered tools as terminal commands, with schema-derived help, JSON output and stable exit codes. For example, list_courses is teachable-cli list-courses. No separate implementation or undocumented legacy request wrappers.

</details>

<details>
<summary><b>Does Teachable have an official MCP?</b></summary>

Yes. Its hosted MCP can search documentation and execute authenticated API operations. The credential-free discovery review found seven v 1 and five v 2 meta-tools, including generic execute-request. Those counts do not describe account-action coverage. See the official MCP guide.

</details>

<details>
<summary><b>When is this companion useful?</b></summary>

Use the dedicated shared CLI, exact private school/version selection, local ordered batch reviews and bounded private exports. The official remote server is a valid alternative for hosted access and documentation search. A CLI or larger discovery count alone does not establish superiority.

</details>

<details>
<summary><b>Which API version should I choose?</b></summary>

Stable v 1 is the default. Beta v 2 requires provider request-access approval, appropriate scoped credentials, TEACHABLE_ENABLE_V 2=1 and an explicit version 2 profile. v 2_ commands never silently fall back to v 1, or vice versa.

</details>

<details>
<summary><b>Where do I get a key?</b></summary>

The school owner uses Settings > API > Create API Key, chooses a name and appropriate permissions, then creates the key. API access remains subject to provider plans and eligibility. Revoke through the same API settings. Never put the key in a repo or chat.

</details>

<details>
<summary><b>Does login create credentials or open OAuth?</b></summary>

No. teachable-cli login prints setup instructions only. This companion accepts existing Admin API keys and does not implement end-user OAuth consent, token exchange or refresh. The official MCP supports separately obtained OAuth tokens for current_user calls.

</details>

<details>
<summary><b>Which clients and systems can use it?</b></summary>

Local stdio clients including Codex, Claude Code, Claude Desktop, Cursor, VS Code/Copilot, Windsurf, Zed and Gemini CLI can launch the server. INSTALL.md also covers OpenCode, Copilot CLI, OpenClaw, Antigravity and Hermes. Node 22+ is required; macOS, Windows and Linux are declared. Actual GUI installation is a separate check.

</details>

<details>
<summary><b>Can I use the desktop extension?</b></summary>

Download teachable-2.0.0.mcpb from GitHub Releases and use a supported Claude Desktop Extensions screen. Choose one private key source. Stable version 1 is the default; enable beta and version 2 only after obtaining access. Bundled production dependencies do not include a Node runtime.

</details>

<details>
<summary><b>Can I connect several schools?</b></summary>

TEACHABLE_ACCOUNTS holds unique named profiles with a pinned api_version and one api_key or credentials_file source. --account selects an exact label. Profiles do not inherit global credentials. The label itself does not establish school identity or resource ownership.

</details>

<details>
<summary><b>What does read-only do?</b></summary>

TEACHABLE_READ_ONLY=1 hides and directly refuses all effects:19 reads in stable discovery, or 64 reads when beta is enabled. It is a local policy, not a reduction of the provider key permissions, and does not control other clients.

</details>

<details>
<summary><b>What requires confirmation?</b></summary>

All provider mutations and private output operations require --confirm in CLI or confirm:true in MCP. Stable mode has 7 effects; beta-enabled mode has 59. This includes enrollment/user changes, batch execution, private export and upload-credential requests. --yes and --agent never approve an effect.

</details>

<details>
<summary><b>Can I create a student without granting marketing consent?</b></summary>

Beta student creation requires an explicit allow_marketing_emails boolean. False remains false; local confirm is unrelated to marketing consent. User role and revenue-share conditions must satisfy the native contract, and provider entitlements remain separate.

</details>

<details>
<summary><b>Can I pass a user password?</b></summary>

Only through an absolute owner-private payload_file containing the native JSON body. There is no password command flag, and inline payload passwords are refused. Known passwords and API keys are redacted from ordinary output. Keep the payload outside repositories and restrict Windows ACLs separately.

</details>

<details>
<summary><b>Are batches transactions?</b></summary>

No. Preview validates up to 20 ordered native requests and hashes order, selected profile label, API version and pinned schema. Submit requires the identical review hash and stops at the first failure. No state lock, credential binding, rollback, expiry or single-use guarantee is claimed.

</details>

<details>
<summary><b>Are exports complete backups?</b></summary>

No. Only 28 reviewed list contracts support this helper. It saves bounded filtered native metadata with explicit page/item/byte budgets and page/offset continuation. Other customer fields remain private data. The result is not an atomic school backup or binary download.

</details>

<details>
<summary><b>Can it upload lesson bytes?</b></summary>

The reviewed beta upload operation creates signed upload credentials in a new private file. It does not transfer bytes or attach/publish content. Native POST/PUT storage details remain in the private receipt, and the subsequent upload/attachment process needs separate validation.

</details>

<details>
<summary><b>Can it create or delete webhooks?</b></summary>

Those old handlers used routes absent from current reviewed Admin contracts, so they are retired. Stable v 1 supports listing webhooks and their events. Configure webhook creation/removal through supported provider administration; do not guess API endpoints.

</details>

<details>
<summary><b>Does CLI save tokens and what does it cost?</b></summary>

The software is free under the preserved AGPL-3.0 license. Provider fees and plans still apply. No completed matched Codex task/token benchmark has been measured for this integration. Schema counts and character estimates are not savings; help, outputs and retries also use context.

</details>

<details>
<summary><b>What changed in version2.0.0?</b></summary>

The old private 14-handler MCP gains shared CLI/MCP surfaces, current native validation, private profiles, mandatory effect approval, reviewed batches, exports and a desktop bundle. Eleven supported legacy names remain with corrected arguments. list_lectures has an explicit beta replacement; unsupported webhook creation/deletion are retired. Private legacy Git history is excluded.

</details>

## Questions

Use [issues](https://github.com/thenavidm/teachable-mcp-cli/issues) with sanitized reproduction steps. Private security reports belong in the advisory form.

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. He creates useful free tools, MCP servers and CLIs that creators and founders can use in their own workflows.

**Links**

- Personal website: [navid.me](https://navid.me)
- Link in bio: [navid.bio](https://navid.bio)
- Navid Media: [navid.media](https://navid.media)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

## Dependencies

MCP SDK1.32.0, Ajv and ajv-formats power the shared runtime. TypeScript, Vitest and the desktop packer are build/test tools. Production dependency licenses ship with the desktop bundle. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and [SECURITY.md](SECURITY.md).

## License

AGPL-3.0, preserved from the owned legacy source. Teachable is a separate provider; this community companion is not the official Teachable MCP.

© 2026 [Navid Media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=teachable-mcp-cli&utm_content=readme). Made with ❤️ by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=teachable-mcp-cli&utm_content=readme).
