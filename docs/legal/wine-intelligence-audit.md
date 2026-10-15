# Wine Intelligence legal pages — internal audit (not public)

Status: DRAFT, preview only. Do NOT publish until every blocker below is resolved.
Public routes: `/privacy/wine-intelligence`, `/delete-account/wine-intelligence` (data: `src/data/wine-legal.ts`).
Sources: owner-supplied `gizlilik-politikasi.html`, `privacy-policy.html`, `hesap-silme.html`,
`account-deletion.html`, `README_YAYINLAMA_TR.md` (received 15 Oct 2026 in chat; originals not stored in repo —
re-upload to `docs/legal/wine-intelligence/source/` if verbatim archiving is required).

## Confirmed by owner
- Controller identity shown: Erkan Kaplan; email likyastudios@gmail.com (confirmed 15 Oct 2026).
- Kemer, Antalya, Türkiye = contact location only.

## Publication blockers (shown on page as "Awaiting confirmation")
| Item | Note |
|---|---|
| Legal name (README mentions "Kaplan Soft" / "likyastudio") | which is the legal entity? |
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
