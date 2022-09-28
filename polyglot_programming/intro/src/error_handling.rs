use anyhow::{Result, anyhow};

fn error_me(throw: bool) -> Result<(), usize> {
    if throw {
        return anyhow!("this should never be true!")
    }

    std::fs::read(PathBuf::from("/foo")).context("Hey unable to do dis!")?;
    
    return Ok(());
}

fn main() -> Result<(), usize> {
    let value = error_me(true)?;

    return Ok(());
}
