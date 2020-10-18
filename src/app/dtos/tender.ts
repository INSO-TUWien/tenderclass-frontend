import { LanguageEntity } from './languageentity';

export class Tender {
  constructor(
    public id: string,
    public cpvs: string[],
    public languageentities: LanguageEntity[],
    original_lang: string,
    original_lang_entity: LanguageEntity
    ) {
  }
}
