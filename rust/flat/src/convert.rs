const OFFSET: u32 = 44032;
const VOWEL: u32 = 28;
const INITIAL: u32 = 588;

const TOTAL_VOWEL: u32 = 21;

#[derive(Debug)]
pub enum Error {
    NotFound(String)
}

#[derive(Debug)]
pub struct Conveter {
    pub korea: Option<String>,
    pub romaji: String,
    pub code: Vec<(u32, u32, u32)>,
}

impl Conveter {
    pub fn new() -> Conveter {
        Conveter {
            korea: None,
            romaji: String::new(),
            code: vec![],
        }
    }

    pub fn convert(&mut self, txt: &str) -> Result<&Conveter, Error> {
        for c in txt.chars() {
            if self.is_hangul(&c) {
                let initial = self.get_initial(&c)?;
                let vowel = self.get_vowel(&c)?;
                let final_ = self.get_final(&c)?;
                self.code.push((initial, vowel, final_));
            } else {
                self.romaji.push(c);
            }
        }
        self.korea = Some(txt.to_owned());
        Ok(self)
    } 

    // pub fn clear(&mut self) {
    //     self.romaji.clear();
    //     self.code = vec![];
    // }
    
    pub fn is_hangul(&self, c: &char) -> bool {
        u32::from(*c) >= OFFSET && u32::from(*c) <= 0xD7AF
    }

    /* 자음 consonant
     * 14 consonants
     * Double consonants 쌍자음
     */
    pub fn get_initial(&mut self, c: &char) -> Result<u32, Error> {
        let idx = (u32::from(*c) - OFFSET)/INITIAL;
        let initial = match idx {
            0 => "g",
            1 => "kk",
            2 => "n",
            3 => "d",
            4 => "dd",
            5 => "r",
            6 => "m",
            7 => "b",
            8 => "pp",
            9 => "s",
            10 => "ss",
            11 => "",
            12 => "j",
            13 => "jj",
            14 => "ch",
            15 => "k",
            16 => "t",
            17 => "p",
            18 => "h",
            _ => return Err(Error::NotFound(format!("There is no initial! {}", idx))),
        };
        self.romaji.push_str(initial);
        Ok(idx)
    }

    /* 모음 vowels
     *
     */
    pub fn get_vowel(&mut self, c: &char) -> Result<u32, Error> {
        let idx = ((u32::from(*c)-OFFSET)/VOWEL) % TOTAL_VOWEL;
        let vowel = match idx {
            0 => "a",
            1 => "ae",
            2 => "ya",
            4 => "eo",
            5 => "e",
            6 => "yeo",
            7 => "ye",
            8 => "o",
            9 => "wa",
            10 => "wae",
            11 => "we",
            12 => "yo",
            13 => "u",
            14 => "weo",
            15 => "we",
            16 => "wi",
            17 => "yu",
            18 => "eu",
            19 => "ui",
            20 => "i",
            _ => return Err(Error::NotFound(format!("There is no vowel! {}", idx))),
        };
        self.romaji.push_str(vowel);
        Ok(idx)
    }

    // 받침 (final consonant)
    pub fn get_final(&mut self, c: &char) -> Result<u32, Error> {
        let idx = (u32::from(*c)-OFFSET) % VOWEL;
        let final_ =  match idx {
            0 => "",
            1 => "g",
            2 => "k",
            3 => "g",
            4 => "n",
            5 => "nj",
            6 => "nh",
            7 => "d",
            8 => "r",
            9 => "rg",
            10 => "rm",
            11 => "rb",
            12 => "rs",
            13 => "rt",
            14 => "rp",
            15 => "rh",
            16 => "m",
            17 => "b",
            18 => "bs",
            19 => "s",
            20 => "ss",
            21 => "ng",
            22 => "j",
            23 => "ch",
            24 => "k",
            25 => "t",
            26 => "p",
            27 => "h",
            _ => return Err(Error::NotFound(format!("There is no final! {}", idx))),
        };
        self.romaji.push_str(final_);
        Ok(idx)
    }
}
