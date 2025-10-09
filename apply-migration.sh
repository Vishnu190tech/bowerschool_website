#!/bin/bash
# Apply Prisma migration
yes | npx prisma migrate dev --name update_enums_to_match_zoho_crm
