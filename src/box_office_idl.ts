export type TBoxOfficeIDL = {
  "version": "0.1.0",
  "name": "box_office",
  "instructions": [
    {
      "name": "createBoxOffice",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The clerk creating the box office must be a signer"
          ]
        },
        {
          "name": "clerkUsdc",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The clerk's USDC token account (to fund the treasury)"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The box office PDA account being created"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token mint for the box office's token"
          ]
        },
        {
          "name": "tempHoldingTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Temporary treasury for holding USDC liquidity"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The USDC mint account"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateBoxOfficeParams"
          }
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helptard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "helptardTokenAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTokenParams"
          }
        }
      ]
    },
    {
      "name": "initializeBoxOfficeTokenTreasuries",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The clerk must be a signer and match the box office's clerk"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The box office being initialized"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The box office's token mint"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Treasury for lock-in tokens"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Treasury for DCA USDC"
          ]
        },
        {
          "name": "helptard",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The HELP_TARD account"
          ]
        },
        {
          "name": "clerkTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Clerk's USDC treasury"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "USDC mint account"
          ]
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeCpmm",
      "accounts": [
        {
          "name": "cpSwapProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "boxOfficeTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerkTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "creator token account"
          ]
        },
        {
          "name": "clerkUsdcToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "creator token account"
          ]
        },
        {
          "name": "creatorLpToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "boxOfficeTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "createPoolFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "create pool fee account"
          ]
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tempHoldingTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Temporary treasury holding the USDC liquidity"
          ]
        },
        {
          "name": "boxOfficeTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerUsdc",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Buyer's USDC account"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "DCA Treasury for USDC"
          ]
        },
        {
          "name": "clerkTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Clerk Treasury for USDC revenue share"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock-in Treasury for tokens (if lock_in enabled)"
          ]
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Existing whitelist account (used to check allocation and record purchases)."
          ]
        },
        {
          "name": "buyerToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Buyer's token account for box office tokens"
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "lockIn",
          "type": "bool"
        }
      ]
    },
    {
      "name": "closeBoxOffice",
      "accounts": [
        {
          "name": "helpTard",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Only HELP_TARD can close the box office"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Box office account to be closed",
            "Rent will be recovered by clerk"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking treasury which must be empty"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "DCA treasury which must be empty"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The user claiming their tickets must be signer"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Box office PDA account"
          ]
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user's ticket state account"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token mint for the box office"
          ]
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User's token account - will be created if it doesn't exist"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Box office lock-in treasury holding tokens"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Required programs"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimDevTokens",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerkTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "manageWhitelist",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "action",
          "type": {
            "defined": "WhitelistAction"
          }
        }
      ]
    },
    {
      "name": "disableWhitelist",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "boxOffice",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clerk",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "siteUrl",
            "type": "string"
          },
          {
            "name": "xAccount",
            "type": "string"
          },
          {
            "name": "ticketsSold",
            "type": "u32"
          },
          {
            "name": "lockedTicketsCount",
            "type": "u32"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "whitelist",
            "type": "bool"
          },
          {
            "name": "status",
            "type": {
              "defined": "BoxOfficeStatus"
            }
          },
          {
            "name": "lockInEnabled",
            "type": "bool"
          },
          {
            "name": "tokenTreasury",
            "type": "publicKey"
          },
          {
            "name": "usdcTreasury",
            "type": "publicKey"
          },
          {
            "name": "clerkTreasury",
            "type": "publicKey"
          },
          {
            "name": "tempHoldingTreasury",
            "type": "publicKey"
          },
          {
            "name": "amm",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "devFeePercentage",
            "type": "u16"
          },
          {
            "name": "devTokensClaimed",
            "type": "bool"
          },
          {
            "name": "devTokenAmount",
            "type": "u64"
          },
          {
            "name": "supplyMultiplier",
            "type": "u64"
          },
          {
            "name": "maxTicketsPerUser",
            "type": "u32"
          },
          {
            "name": "closedTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ticket",
      "docs": [
        "Ticket state structure for tracking user ticket holdings and claims"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "boxOffice",
            "docs": [
              "The box office PDA account this ticket state belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "The owner/buyer of these tickets"
            ],
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "docs": [
              "Current non-locked tickets held that are not claimed",
              "This tracks the \"free\" tickets that can be claimed"
            ],
            "type": "u32"
          },
          {
            "name": "purchasedTickets",
            "docs": [
              "Total number of standard/non-lock tickets bought",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "lockedTickets",
            "docs": [
              "Total number of locked tickets bought",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "lastPurchaseTimestamp",
            "docs": [
              "Timestamp of the most recent ticket purchase",
              "Unix timestamp in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "claimTimestamp",
            "docs": [
              "Timestamp when tickets become claimable",
              "Set to last_purchase_timestamp + 300 seconds"
            ],
            "type": "i64"
          },
          {
            "name": "claimedTickets",
            "docs": [
              "Total number of tickets that have been claimed",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future expansions"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "whitelistState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "boxOffice",
            "docs": [
              "Associated box office account"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "Authority that can update whitelist"
            ],
            "type": "publicKey"
          },
          {
            "name": "maxNumNodes",
            "docs": [
              "Maximum nodes (addresses) allowed (this also determines the length of the allocations array)"
            ],
            "type": "u32"
          },
          {
            "name": "claimedBitmap",
            "docs": [
              "Bitmap storage for whitelisted entries (1 bit per potential index)"
            ],
            "type": "bytes"
          },
          {
            "name": "allocations",
            "docs": [
              "For each index (of length max_num_nodes), store the allocation (0 means not whitelisted)."
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "purchases",
            "docs": [
              "For each index, store the number of tickets already purchased."
            ],
            "type": {
              "vec": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "AmmConfig",
      "docs": [
        "Holds the current owner of the factory"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "disableCreatePool",
            "docs": [
              "Status to control if new pool can be create"
            ],
            "type": "bool"
          },
          {
            "name": "index",
            "docs": [
              "Config index"
            ],
            "type": "u16"
          },
          {
            "name": "tradeFeeRate",
            "docs": [
              "The trade fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeeRate",
            "docs": [
              "The protocol fee"
            ],
            "type": "u64"
          },
          {
            "name": "fundFeeRate",
            "docs": [
              "The fund fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "createPoolFee",
            "docs": [
              "Fee for create a new pool"
            ],
            "type": "u64"
          },
          {
            "name": "protocolOwner",
            "docs": [
              "Address of the protocol fee owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "fundOwner",
            "docs": [
              "Address of the fund fee owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventCategory",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "BoxOffice"
          },
          {
            "name": "Treasury"
          },
          {
            "name": "Ticket"
          },
          {
            "name": "Staking"
          },
          {
            "name": "Critical"
          }
        ]
      }
    },
    {
      "name": "BoxOfficeConfiguration",
      "docs": [
        "Box office configuration parameters"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "ticketSupply",
            "type": "u32"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "tokenPayoutAmount",
            "type": "u64"
          },
          {
            "name": "tokenPayoutCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WhitelistOperation",
      "docs": [
        "Types of whitelist operations"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Add"
          },
          {
            "name": "Remove"
          },
          {
            "name": "UpdateAllocation"
          }
        ]
      }
    },
    {
      "name": "EventContext",
      "docs": [
        "Context structure for all events",
        "",
        "Provides consistent metadata for event tracking including:",
        "- Timestamp for time-based analysis",
        "- Slot for chain position",
        "- Optional transaction signature",
        "- Event category for classification",
        "",
        "# Fields",
        "* `timestamp` - Unix timestamp of event",
        "* `slot` - Slot number when event occurred",
        "* `signature` - Optional transaction signature",
        "* `category` - Event classification category"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "signature",
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "category",
            "type": {
              "defined": "EventCategory"
            }
          }
        ]
      }
    },
    {
      "name": "CreateBoxOfficeParams",
      "docs": [
        "Parameters for creating a new box office"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintSeedBuffer",
            "docs": [
              "Random seed buffer for token mint ordering"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "name",
            "docs": [
              "Name of the box office"
            ],
            "type": "string"
          },
          {
            "name": "ticker",
            "docs": [
              "Token ticker symbol"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "Metadata URI"
            ],
            "type": "string"
          },
          {
            "name": "siteUrl",
            "docs": [
              "Project website URL"
            ],
            "type": "string"
          },
          {
            "name": "xAccount",
            "docs": [
              "Twitter/X account handle"
            ],
            "type": "string"
          },
          {
            "name": "lockInEnabled",
            "docs": [
              "Whether lock-in feature is enabled"
            ],
            "type": "bool"
          },
          {
            "name": "whitelistEnabled",
            "docs": [
              "Whether whitelist feature is enabled"
            ],
            "type": "bool"
          },
          {
            "name": "devFeePercentage",
            "docs": [
              "Developer fee percentage in basis points (e.g., 250 = 2.5%)"
            ],
            "type": "u16"
          },
          {
            "name": "supplyMultiplier",
            "docs": [
              "Supply multiplier for token amounts"
            ],
            "type": "u64"
          },
          {
            "name": "maxTicketsPerUser",
            "docs": [
              "Maximum tickets allowed per user (for non–whitelisted buyers)"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "CreateTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "description",
            "docs": [
              "Project description"
            ],
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "WhitelistAction",
      "docs": [
        "Available whitelist management actions"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Add",
            "fields": [
              {
                "name": "address",
                "type": "publicKey"
              },
              {
                "name": "allocation",
                "type": "u16"
              }
            ]
          },
          {
            "name": "Remove",
            "fields": [
              {
                "name": "address",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "BoxOfficeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Creation"
          },
          {
            "name": "Ready"
          },
          {
            "name": "Initialized"
          },
          {
            "name": "Closed"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BoxOfficeClosed",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "closeTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeConfigUpdated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "clerk",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldConfig",
          "type": {
            "defined": "BoxOfficeConfiguration"
          },
          "index": false
        },
        {
          "name": "newConfig",
          "type": {
            "defined": "BoxOfficeConfiguration"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeCreated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "clerk",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creationTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeStatusChanged",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldStatus",
          "type": {
            "defined": "BoxOfficeStatus"
          },
          "index": false
        },
        {
          "name": "newStatus",
          "type": {
            "defined": "BoxOfficeStatus"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "TicketsClaimed",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WhitelistUpdated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "address",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "allocation",
          "type": "u64",
          "index": false
        },
        {
          "name": "operation",
          "type": {
            "defined": "WhitelistOperation"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Box Office already initialized"
    },
    {
      "code": 6001,
      "name": "AlreadyCreatedTokens",
      "msg": "The tokens have already been created"
    },
    {
      "code": 6002,
      "name": "InvalidState",
      "msg": "Invalid program state"
    },
    {
      "code": 6003,
      "name": "InvalidPoolState",
      "msg": "Invalid pool state"
    },
    {
      "code": 6004,
      "name": "InvalidParameter",
      "msg": "Invalid parameter provided"
    },
    {
      "code": 6005,
      "name": "InvalidMintOrder",
      "msg": "Token mint must be less than USDC mint"
    },
    {
      "code": 6006,
      "name": "TicketsNotSoldOut",
      "msg": "Tickets not sold out"
    },
    {
      "code": 6007,
      "name": "InvalidHelpTard",
      "msg": "Invalid HELP_TARD account"
    },
    {
      "code": 6008,
      "name": "InvalidUsdcMint",
      "msg": "Invalid USDC mint"
    },
    {
      "code": 6009,
      "name": "InvalidAmmConfig",
      "msg": "Invalid AMM config"
    },
    {
      "code": 6010,
      "name": "InvalidVault",
      "msg": "Invalid vault account"
    },
    {
      "code": 6011,
      "name": "InvalidConfig",
      "msg": "Invalid config"
    },
    {
      "code": 6012,
      "name": "InvalidMint",
      "msg": "Invalid mint"
    },
    {
      "code": 6013,
      "name": "InvalidPDA",
      "msg": "InvalidPDA"
    },
    {
      "code": 6014,
      "name": "SoldOut",
      "msg": "Tickets sold out"
    },
    {
      "code": 6015,
      "name": "InvalidTicketAmount",
      "msg": "Invalid ticket amount"
    },
    {
      "code": 6016,
      "name": "InvalidTicketPrice",
      "msg": "Invalid ticket price"
    },
    {
      "code": 6017,
      "name": "InvalidTicketSupply",
      "msg": "Invalid ticket supply"
    },
    {
      "code": 6018,
      "name": "LockInNotEnabled",
      "msg": "Lock-in not enabled"
    },
    {
      "code": 6019,
      "name": "NotInitialized",
      "msg": "NotInitialized"
    },
    {
      "code": 6020,
      "name": "IndexOutOfBounds",
      "msg": "IndexOutOfBounds"
    },
    {
      "code": 6021,
      "name": "NotWhitelisted",
      "msg": "Not whitelisted"
    },
    {
      "code": 6022,
      "name": "InvalidWhitelistEntry",
      "msg": "Invalid whitelist entry"
    },
    {
      "code": 6023,
      "name": "WhitelistTooLarge",
      "msg": "Whitelist too large"
    },
    {
      "code": 6024,
      "name": "TreasuryNotEmpty",
      "msg": "Treasury not empty"
    },
    {
      "code": 6025,
      "name": "TreasuryAccountMismatch",
      "msg": "Treasury account mismatch"
    },
    {
      "code": 6026,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6027,
      "name": "InvalidFeeRecipient",
      "msg": "Invalid fee recipient"
    },
    {
      "code": 6028,
      "name": "InvalidOwner",
      "msg": "Invalid owner for account"
    },
    {
      "code": 6029,
      "name": "InvalidBoxOffice",
      "msg": "Invalid box office for account"
    },
    {
      "code": 6030,
      "name": "InvalidTokenomics",
      "msg": "Invalid token economics"
    },
    {
      "code": 6031,
      "name": "InvalidTokenSupply",
      "msg": "Invalid token supply"
    },
    {
      "code": 6032,
      "name": "InvalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6033,
      "name": "TokenSupplyMismatch",
      "msg": "Token supply mismatch"
    },
    {
      "code": 6034,
      "name": "InsufficientStakeAmount",
      "msg": "Insufficient stake amount"
    },
    {
      "code": 6035,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6036,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorized operation"
    },
    {
      "code": 6037,
      "name": "UnauthorizedCaller",
      "msg": "Unauthorized caller"
    },
    {
      "code": 6038,
      "name": "ArithmeticOverflow",
      "msg": "Arithmetic overflow"
    },
    {
      "code": 6039,
      "name": "DivisionByZero",
      "msg": "Division by zero"
    },
    {
      "code": 6040,
      "name": "TimestampOverflow",
      "msg": "Timestamp overflow"
    },
    {
      "code": 6041,
      "name": "TooEarlyForUpdate",
      "msg": "Too early for update"
    },
    {
      "code": 6042,
      "name": "BoxOfficeClosed",
      "msg": "Box office closed"
    },
    {
      "code": 6043,
      "name": "AlreadyClaimed",
      "msg": "Dev tokens have already been claimed"
    },
    {
      "code": 6044,
      "name": "BoxOfficeNotClosed",
      "msg": "Box office must be closed to claim dev tokens"
    },
    {
      "code": 6045,
      "name": "WhitelistPurchaseLimitExceeded",
      "msg": "Whitelist purchase limit exceeded"
    },
    {
      "code": 6046,
      "name": "MissingWhitelistAllocation",
      "msg": "Missing whitelist allocation account"
    },
    {
      "code": 6047,
      "name": "InvalidWhitelistAllocation",
      "msg": "Invalid whitelist allocation account"
    }
  ]
};

export const BoxOfficeIDL: TBoxOfficeIDL = {
  "version": "0.1.0",
  "name": "box_office",
  "instructions": [
    {
      "name": "createBoxOffice",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The clerk creating the box office must be a signer"
          ]
        },
        {
          "name": "clerkUsdc",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The clerk's USDC token account (to fund the treasury)"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The box office PDA account being created"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token mint for the box office's token"
          ]
        },
        {
          "name": "tempHoldingTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Temporary treasury for holding USDC liquidity"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The USDC mint account"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateBoxOfficeParams"
          }
        }
      ]
    },
    {
      "name": "createToken",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helptard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "helptardTokenAccount",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "CreateTokenParams"
          }
        }
      ]
    },
    {
      "name": "initializeBoxOfficeTokenTreasuries",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The clerk must be a signer and match the box office's clerk"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The box office being initialized"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The box office's token mint"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Treasury for lock-in tokens"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Treasury for DCA USDC"
          ]
        },
        {
          "name": "helptard",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The HELP_TARD account"
          ]
        },
        {
          "name": "clerkTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Clerk's USDC treasury"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "USDC mint account"
          ]
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false,
          "isOptional": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "initializeCpmm",
      "accounts": [
        {
          "name": "cpSwapProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ammConfig",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "poolState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "boxOfficeTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerkTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "creator token account"
          ]
        },
        {
          "name": "clerkUsdcToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "creator token account"
          ]
        },
        {
          "name": "creatorLpToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "boxOfficeTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "createPoolFee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "create pool fee account"
          ]
        },
        {
          "name": "observationState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tempHoldingTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Temporary treasury holding the USDC liquidity"
          ]
        },
        {
          "name": "boxOfficeTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "buyTicket",
      "accounts": [
        {
          "name": "buyer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "buyerUsdc",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Buyer's USDC account"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "DCA Treasury for USDC"
          ]
        },
        {
          "name": "clerkTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Clerk Treasury for USDC revenue share"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Lock-in Treasury for tokens (if lock_in enabled)"
          ]
        },
        {
          "name": "treasury",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeRecipient",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Existing whitelist account (used to check allocation and record purchases)."
          ]
        },
        {
          "name": "buyerToken",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Buyer's token account for box office tokens"
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u32"
        },
        {
          "name": "lockIn",
          "type": "bool"
        }
      ]
    },
    {
      "name": "closeBoxOffice",
      "accounts": [
        {
          "name": "helpTard",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Only HELP_TARD can close the box office"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Box office account to be closed",
            "Rent will be recovered by clerk"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking treasury which must be empty"
          ]
        },
        {
          "name": "usdcTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "DCA treasury which must be empty"
          ]
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The user claiming their tickets must be signer"
          ]
        },
        {
          "name": "boxOffice",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Box office PDA account"
          ]
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The user's ticket state account"
          ]
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token mint for the box office"
          ]
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User's token account - will be created if it doesn't exist"
          ]
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Box office lock-in treasury holding tokens"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Required programs"
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "claimDevTokens",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clerkTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTreasury",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "manageWhitelist",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "whitelist",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "action",
          "type": {
            "defined": "WhitelistAction"
          }
        }
      ]
    },
    {
      "name": "disableWhitelist",
      "accounts": [
        {
          "name": "clerk",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "boxOffice",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "boxOffice",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "clerk",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "siteUrl",
            "type": "string"
          },
          {
            "name": "xAccount",
            "type": "string"
          },
          {
            "name": "ticketsSold",
            "type": "u32"
          },
          {
            "name": "lockedTicketsCount",
            "type": "u32"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "creationTime",
            "type": "i64"
          },
          {
            "name": "initialized",
            "type": "bool"
          },
          {
            "name": "whitelist",
            "type": "bool"
          },
          {
            "name": "status",
            "type": {
              "defined": "BoxOfficeStatus"
            }
          },
          {
            "name": "lockInEnabled",
            "type": "bool"
          },
          {
            "name": "tokenTreasury",
            "type": "publicKey"
          },
          {
            "name": "usdcTreasury",
            "type": "publicKey"
          },
          {
            "name": "clerkTreasury",
            "type": "publicKey"
          },
          {
            "name": "tempHoldingTreasury",
            "type": "publicKey"
          },
          {
            "name": "amm",
            "type": "publicKey"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "devFeePercentage",
            "type": "u16"
          },
          {
            "name": "devTokensClaimed",
            "type": "bool"
          },
          {
            "name": "devTokenAmount",
            "type": "u64"
          },
          {
            "name": "supplyMultiplier",
            "type": "u64"
          },
          {
            "name": "maxTicketsPerUser",
            "type": "u32"
          },
          {
            "name": "closedTime",
            "type": {
              "option": "i64"
            }
          },
          {
            "name": "reserved",
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ticket",
      "docs": [
        "Ticket state structure for tracking user ticket holdings and claims"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "boxOffice",
            "docs": [
              "The box office PDA account this ticket state belongs to"
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "The owner/buyer of these tickets"
            ],
            "type": "publicKey"
          },
          {
            "name": "tickets",
            "docs": [
              "Current non-locked tickets held that are not claimed",
              "This tracks the \"free\" tickets that can be claimed"
            ],
            "type": "u32"
          },
          {
            "name": "purchasedTickets",
            "docs": [
              "Total number of standard/non-lock tickets bought",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "lockedTickets",
            "docs": [
              "Total number of locked tickets bought",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "lastPurchaseTimestamp",
            "docs": [
              "Timestamp of the most recent ticket purchase",
              "Unix timestamp in seconds"
            ],
            "type": "i64"
          },
          {
            "name": "claimTimestamp",
            "docs": [
              "Timestamp when tickets become claimable",
              "Set to last_purchase_timestamp + 300 seconds"
            ],
            "type": "i64"
          },
          {
            "name": "claimedTickets",
            "docs": [
              "Total number of tickets that have been claimed",
              "This is a lifetime metric that only increases"
            ],
            "type": "u32"
          },
          {
            "name": "bump",
            "docs": [
              "PDA bump seed"
            ],
            "type": "u8"
          },
          {
            "name": "reserved",
            "docs": [
              "Reserved for future expansions"
            ],
            "type": {
              "array": [
                "u8",
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "whitelistState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "boxOffice",
            "docs": [
              "Associated box office account"
            ],
            "type": "publicKey"
          },
          {
            "name": "authority",
            "docs": [
              "Authority that can update whitelist"
            ],
            "type": "publicKey"
          },
          {
            "name": "maxNumNodes",
            "docs": [
              "Maximum nodes (addresses) allowed (this also determines the length of the allocations array)"
            ],
            "type": "u32"
          },
          {
            "name": "claimedBitmap",
            "docs": [
              "Bitmap storage for whitelisted entries (1 bit per potential index)"
            ],
            "type": "bytes"
          },
          {
            "name": "allocations",
            "docs": [
              "For each index (of length max_num_nodes), store the allocation (0 means not whitelisted)."
            ],
            "type": {
              "vec": "u16"
            }
          },
          {
            "name": "purchases",
            "docs": [
              "For each index, store the number of tickets already purchased."
            ],
            "type": {
              "vec": "u32"
            }
          }
        ]
      }
    },
    {
      "name": "AmmConfig",
      "docs": [
        "Holds the current owner of the factory"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "docs": [
              "Bump to identify PDA"
            ],
            "type": "u8"
          },
          {
            "name": "disableCreatePool",
            "docs": [
              "Status to control if new pool can be create"
            ],
            "type": "bool"
          },
          {
            "name": "index",
            "docs": [
              "Config index"
            ],
            "type": "u16"
          },
          {
            "name": "tradeFeeRate",
            "docs": [
              "The trade fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "protocolFeeRate",
            "docs": [
              "The protocol fee"
            ],
            "type": "u64"
          },
          {
            "name": "fundFeeRate",
            "docs": [
              "The fund fee, denominated in hundredths of a bip (10^-6)"
            ],
            "type": "u64"
          },
          {
            "name": "createPoolFee",
            "docs": [
              "Fee for create a new pool"
            ],
            "type": "u64"
          },
          {
            "name": "protocolOwner",
            "docs": [
              "Address of the protocol fee owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "fundOwner",
            "docs": [
              "Address of the fund fee owner"
            ],
            "type": "publicKey"
          },
          {
            "name": "padding",
            "docs": [
              "padding"
            ],
            "type": {
              "array": [
                "u64",
                16
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "EventCategory",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "BoxOffice"
          },
          {
            "name": "Treasury"
          },
          {
            "name": "Ticket"
          },
          {
            "name": "Staking"
          },
          {
            "name": "Critical"
          }
        ]
      }
    },
    {
      "name": "BoxOfficeConfiguration",
      "docs": [
        "Box office configuration parameters"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "ticker",
            "type": "string"
          },
          {
            "name": "ticketSupply",
            "type": "u32"
          },
          {
            "name": "tokenSupply",
            "type": "u64"
          },
          {
            "name": "ticketPrice",
            "type": "u64"
          },
          {
            "name": "tokenPayoutAmount",
            "type": "u64"
          },
          {
            "name": "tokenPayoutCount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WhitelistOperation",
      "docs": [
        "Types of whitelist operations"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Add"
          },
          {
            "name": "Remove"
          },
          {
            "name": "UpdateAllocation"
          }
        ]
      }
    },
    {
      "name": "EventContext",
      "docs": [
        "Context structure for all events",
        "",
        "Provides consistent metadata for event tracking including:",
        "- Timestamp for time-based analysis",
        "- Slot for chain position",
        "- Optional transaction signature",
        "- Event category for classification",
        "",
        "# Fields",
        "* `timestamp` - Unix timestamp of event",
        "* `slot` - Slot number when event occurred",
        "* `signature` - Optional transaction signature",
        "* `category` - Event classification category"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "timestamp",
            "type": "i64"
          },
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "signature",
            "type": {
              "option": {
                "array": [
                  "u8",
                  64
                ]
              }
            }
          },
          {
            "name": "category",
            "type": {
              "defined": "EventCategory"
            }
          }
        ]
      }
    },
    {
      "name": "CreateBoxOfficeParams",
      "docs": [
        "Parameters for creating a new box office"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mintSeedBuffer",
            "docs": [
              "Random seed buffer for token mint ordering"
            ],
            "type": {
              "array": [
                "u8",
                8
              ]
            }
          },
          {
            "name": "name",
            "docs": [
              "Name of the box office"
            ],
            "type": "string"
          },
          {
            "name": "ticker",
            "docs": [
              "Token ticker symbol"
            ],
            "type": "string"
          },
          {
            "name": "uri",
            "docs": [
              "Metadata URI"
            ],
            "type": "string"
          },
          {
            "name": "siteUrl",
            "docs": [
              "Project website URL"
            ],
            "type": "string"
          },
          {
            "name": "xAccount",
            "docs": [
              "Twitter/X account handle"
            ],
            "type": "string"
          },
          {
            "name": "lockInEnabled",
            "docs": [
              "Whether lock-in feature is enabled"
            ],
            "type": "bool"
          },
          {
            "name": "whitelistEnabled",
            "docs": [
              "Whether whitelist feature is enabled"
            ],
            "type": "bool"
          },
          {
            "name": "devFeePercentage",
            "docs": [
              "Developer fee percentage in basis points (e.g., 250 = 2.5%)"
            ],
            "type": "u16"
          },
          {
            "name": "supplyMultiplier",
            "docs": [
              "Supply multiplier for token amounts"
            ],
            "type": "u64"
          },
          {
            "name": "maxTicketsPerUser",
            "docs": [
              "Maximum tickets allowed per user (for non–whitelisted buyers)"
            ],
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "CreateTokenParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "description",
            "docs": [
              "Project description"
            ],
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "WhitelistAction",
      "docs": [
        "Available whitelist management actions"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Add",
            "fields": [
              {
                "name": "address",
                "type": "publicKey"
              },
              {
                "name": "allocation",
                "type": "u16"
              }
            ]
          },
          {
            "name": "Remove",
            "fields": [
              {
                "name": "address",
                "type": "publicKey"
              }
            ]
          }
        ]
      }
    },
    {
      "name": "BoxOfficeStatus",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Creation"
          },
          {
            "name": "Ready"
          },
          {
            "name": "Initialized"
          },
          {
            "name": "Closed"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "BoxOfficeClosed",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "closeTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeConfigUpdated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "clerk",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldConfig",
          "type": {
            "defined": "BoxOfficeConfiguration"
          },
          "index": false
        },
        {
          "name": "newConfig",
          "type": {
            "defined": "BoxOfficeConfiguration"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeCreated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "clerk",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "creationTime",
          "type": "i64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "BoxOfficeStatusChanged",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "oldStatus",
          "type": {
            "defined": "BoxOfficeStatus"
          },
          "index": false
        },
        {
          "name": "newStatus",
          "type": {
            "defined": "BoxOfficeStatus"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "TicketsClaimed",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "owner",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    },
    {
      "name": "WhitelistUpdated",
      "fields": [
        {
          "name": "boxOffice",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "address",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "allocation",
          "type": "u64",
          "index": false
        },
        {
          "name": "operation",
          "type": {
            "defined": "WhitelistOperation"
          },
          "index": false
        },
        {
          "name": "context",
          "type": {
            "defined": "EventContext"
          },
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Box Office already initialized"
    },
    {
      "code": 6001,
      "name": "AlreadyCreatedTokens",
      "msg": "The tokens have already been created"
    },
    {
      "code": 6002,
      "name": "InvalidState",
      "msg": "Invalid program state"
    },
    {
      "code": 6003,
      "name": "InvalidPoolState",
      "msg": "Invalid pool state"
    },
    {
      "code": 6004,
      "name": "InvalidParameter",
      "msg": "Invalid parameter provided"
    },
    {
      "code": 6005,
      "name": "InvalidMintOrder",
      "msg": "Token mint must be less than USDC mint"
    },
    {
      "code": 6006,
      "name": "TicketsNotSoldOut",
      "msg": "Tickets not sold out"
    },
    {
      "code": 6007,
      "name": "InvalidHelpTard",
      "msg": "Invalid HELP_TARD account"
    },
    {
      "code": 6008,
      "name": "InvalidUsdcMint",
      "msg": "Invalid USDC mint"
    },
    {
      "code": 6009,
      "name": "InvalidAmmConfig",
      "msg": "Invalid AMM config"
    },
    {
      "code": 6010,
      "name": "InvalidVault",
      "msg": "Invalid vault account"
    },
    {
      "code": 6011,
      "name": "InvalidConfig",
      "msg": "Invalid config"
    },
    {
      "code": 6012,
      "name": "InvalidMint",
      "msg": "Invalid mint"
    },
    {
      "code": 6013,
      "name": "InvalidPDA",
      "msg": "InvalidPDA"
    },
    {
      "code": 6014,
      "name": "SoldOut",
      "msg": "Tickets sold out"
    },
    {
      "code": 6015,
      "name": "InvalidTicketAmount",
      "msg": "Invalid ticket amount"
    },
    {
      "code": 6016,
      "name": "InvalidTicketPrice",
      "msg": "Invalid ticket price"
    },
    {
      "code": 6017,
      "name": "InvalidTicketSupply",
      "msg": "Invalid ticket supply"
    },
    {
      "code": 6018,
      "name": "LockInNotEnabled",
      "msg": "Lock-in not enabled"
    },
    {
      "code": 6019,
      "name": "NotInitialized",
      "msg": "NotInitialized"
    },
    {
      "code": 6020,
      "name": "IndexOutOfBounds",
      "msg": "IndexOutOfBounds"
    },
    {
      "code": 6021,
      "name": "NotWhitelisted",
      "msg": "Not whitelisted"
    },
    {
      "code": 6022,
      "name": "InvalidWhitelistEntry",
      "msg": "Invalid whitelist entry"
    },
    {
      "code": 6023,
      "name": "WhitelistTooLarge",
      "msg": "Whitelist too large"
    },
    {
      "code": 6024,
      "name": "TreasuryNotEmpty",
      "msg": "Treasury not empty"
    },
    {
      "code": 6025,
      "name": "TreasuryAccountMismatch",
      "msg": "Treasury account mismatch"
    },
    {
      "code": 6026,
      "name": "InvalidTokenMint",
      "msg": "Invalid token mint"
    },
    {
      "code": 6027,
      "name": "InvalidFeeRecipient",
      "msg": "Invalid fee recipient"
    },
    {
      "code": 6028,
      "name": "InvalidOwner",
      "msg": "Invalid owner for account"
    },
    {
      "code": 6029,
      "name": "InvalidBoxOffice",
      "msg": "Invalid box office for account"
    },
    {
      "code": 6030,
      "name": "InvalidTokenomics",
      "msg": "Invalid token economics"
    },
    {
      "code": 6031,
      "name": "InvalidTokenSupply",
      "msg": "Invalid token supply"
    },
    {
      "code": 6032,
      "name": "InvalidMintAuthority",
      "msg": "Invalid mint authority"
    },
    {
      "code": 6033,
      "name": "TokenSupplyMismatch",
      "msg": "Token supply mismatch"
    },
    {
      "code": 6034,
      "name": "InsufficientStakeAmount",
      "msg": "Insufficient stake amount"
    },
    {
      "code": 6035,
      "name": "InvalidAuthority",
      "msg": "Invalid authority"
    },
    {
      "code": 6036,
      "name": "UnauthorizedOperation",
      "msg": "Unauthorized operation"
    },
    {
      "code": 6037,
      "name": "UnauthorizedCaller",
      "msg": "Unauthorized caller"
    },
    {
      "code": 6038,
      "name": "ArithmeticOverflow",
      "msg": "Arithmetic overflow"
    },
    {
      "code": 6039,
      "name": "DivisionByZero",
      "msg": "Division by zero"
    },
    {
      "code": 6040,
      "name": "TimestampOverflow",
      "msg": "Timestamp overflow"
    },
    {
      "code": 6041,
      "name": "TooEarlyForUpdate",
      "msg": "Too early for update"
    },
    {
      "code": 6042,
      "name": "BoxOfficeClosed",
      "msg": "Box office closed"
    },
    {
      "code": 6043,
      "name": "AlreadyClaimed",
      "msg": "Dev tokens have already been claimed"
    },
    {
      "code": 6044,
      "name": "BoxOfficeNotClosed",
      "msg": "Box office must be closed to claim dev tokens"
    },
    {
      "code": 6045,
      "name": "WhitelistPurchaseLimitExceeded",
      "msg": "Whitelist purchase limit exceeded"
    },
    {
      "code": 6046,
      "name": "MissingWhitelistAllocation",
      "msg": "Missing whitelist allocation account"
    },
    {
      "code": 6047,
      "name": "InvalidWhitelistAllocation",
      "msg": "Invalid whitelist allocation account"
    }
  ]
};