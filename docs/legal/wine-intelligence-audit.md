# Wine Intelligence legal pages — internal audit (not public)

Status: DRAFT, preview only. Do NOT publish until every blocker below is resolved.
Public routes: `/privacy/wine-intelligence`, `/delete-account/wine-intelligence` (data: `src/data/wine-legal.ts`).
Sources: owner-supplied `gizlilik-politikasi.html`, `privacy-policy.html`, `hesap-silme.html`,
`account-deletion.html`, `README_YAYINLAMA_TR.md` (15 Oct 2026; originals archived by the owner locally).

## Confirmed by owner
- Data controller: Erkan Kaplan (owner answered "evet"); email likyastudios@gmail.com (confirmed 15 Oct 2026).
- Kemer, Antalya, Türkiye = contact location only.

## Publication blockers (shown on page as "Awaiting confirmation")
| Item | Note |
|---|---|
| Full / registered postal address | not supplied |
| Effective date | 15 Oct 2026 is draft-updated date only |
| Hosting / Cloud Logging retention | README: default 30 days — verify in GCP project |
| Backup (Cloud SQL) retention and deletion from backups | unverified |
| `DELETE /auth/me/{uid}` full server deletion coverage | unverified |
| Statutory retention obligation (scope/period) | do not assert none exists |
| Groq / OpenAI retention + training settings | verify account/contract settings |
| KVKK Art. 9 transfer mechanism / safeguards; GDPR applicability & Art. 6 mapping | legal review |
| Cloud Run region europe-west4 | confirm current deployment |
| 30-day email request completion | owner operational process confirmation |
| VERBİS obligation | accountant/legal check |

## Deliberate changes vs. source
- Removed unconditional "immediate" for in-app deletion: initiation ≠ backend/backup/provider completion.
- "Device-only, no transfer" no longer listed as a legal basis.
- Email route explicitly cannot clear on-device data; user must clear locally (Android Clear data / uninstall).
- Server-claimed behaviors labelled "according to source documents"; this site did not audit app/backend.
- Password: "managed by Firebase" (no plaintext claim).

## Play Console (after blockers cleared)
- Privacy policy URL: https://likyastudios.live/privacy/wine-intelligence
- Account deletion URL: https://likyastudios.live/delete-account/wine-intelligence

## Mobile source review (by owner, repo likyastudio/wineintelligence @ 504ed56c922c5c52bccbb7c22a29d1256f1b11b5, 15 Oct 2026)
Confirmed in client source (not by this website; release build equivalence NOT confirmed, no merged-manifest/network audit):
- `auth_provider.dart:481` deleteAccount: server request → Firebase delete → `LocalUserScope.deleteAuthenticatedUser`; any failure returns false.
- `api_client.dart:60` `DELETE /auth/me/{uid}`; request sends only Content-Type/Accept, **no Authorization header**.
  → INTERNAL FOLLOW-UP: inspect server ownership/authorization check for this endpoint. Not asserted as a vulnerability; no destructive request tested.
- `local_user_scope.dart`: guest, legacy and per-UID scopes; deletion clears only that UID. Guest/legacy/other-UID records remain → public page updated; Android "Clear data" covers all.
- `_queueProfileCache` caches UID, optional backendUserId, name, email, provider, optional avatarUrl (photoURL from provider via `_modelFromFirebase`) → disclosed on public privacy page (both locales).
- continueAsGuest + email/Google/Apple sign-in; legacy token/password cache removed.
- `label_scan_io.dart`: ML Kit TextRecognizer, `InputImage.fromFilePath`; no photo/raw OCR upload in inspected API client. Search: local first, API fallback.
- `pubspec.yaml`: no direct ad/behavioral analytics SDK (transitive not audited). Manifest: INTERNET + CAMERA, cleartext false.
- `privacy_screen.dart` itself says backend/provider retention and backup deletion are not yet verified.

Still owner-README claims only (server source not in repo, not reconfirmed): Groq primary / OpenAI fallback routing, only text + fixed system instruction sent, no prompt DB write/logging, Cloud Run region.

## Official docs read 2026-10-15 (defaults ≠ project configuration proof)
- Google Play account deletion requirements: https://support.google.com/googleplay/android-developer/answer/13327111?hl=en
- Groq: https://console.groq.com/docs/your-data
- OpenAI: https://developers.openai.com/api/docs/guides/your-data
