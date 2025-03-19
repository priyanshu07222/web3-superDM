use anchor_lang::prelude::*;

declare_id!("5aPAEM8nK56krn1dnYXxRjnYPcxZe2B4eHjL15ZA7e25");

#[program]
pub mod super_dm {
    use super::*;

    // pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
    //     msg!("Greetings from: {:?}", ctx.program_id);
    //     Ok(())
    // }

    pub fn send_dm(ctx: Context<CreateSuperDm>, msg: String) -> Result<()> {}
}

#[derive(Accounts)]
[instruction(msg: String)]
pub struct CreateSuperDm<'info> {
    #[account(
        init,
        payer=sender,
        space = 8 + 32 + 32 + 8 + msg.len()
    )]
    pub superdm: Accounts<'info, Super_dm>
    [account(mut)]
    pub sender: Signer<'info>,
    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
pub struct Send_sol<'info>{
    #[account(mut)]
    pub supredm: <'info, Super_dm>
}


#[account]
pub struct Super_dm {
    pub sender: Pubkey,
    pub receiver: Pubkey,
    pub amount: u64,
    pub msg: String,
}

#[error_code]
pub enum ErrorCode{
    #[msg("Insufficient fund")]
    InsufficientFunds
}
