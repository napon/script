export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      citation_authors: {
        Row: {
          citation_id: number
          created_at: string
          creator_type: string
          first_name: string
          id: number
          last_name: string
        }
        Insert: {
          citation_id: number
          created_at?: string
          creator_type: string
          first_name: string
          id?: number
          last_name: string
        }
        Update: {
          citation_id?: number
          created_at?: string
          creator_type?: string
          first_name?: string
          id?: number
          last_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "authors_citation_id_fkey"
            columns: ["citation_id"]
            isOneToOne: false
            referencedRelation: "citations"
            referencedColumns: ["id"]
          },
        ]
      }
      citations: {
        Row: {
          created_at: string | null
          date: string
          id: number
          issue: string
          item_type: string
          journal_abbreviation: string
          owner_id: string
          pages: string
          project_id: number
          publication_title: string
          title: string
          url: string
          volume: string
          zotero_key: string
        }
        Insert: {
          created_at?: string | null
          date: string
          id?: number
          issue: string
          item_type: string
          journal_abbreviation: string
          owner_id: string
          pages: string
          project_id: number
          publication_title: string
          title: string
          url: string
          volume: string
          zotero_key: string
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: number
          issue?: string
          item_type?: string
          journal_abbreviation?: string
          owner_id?: string
          pages?: string
          project_id?: number
          publication_title?: string
          title?: string
          url?: string
          volume?: string
          zotero_key?: string
        }
        Relationships: [
          {
            foreignKeyName: "citation_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "citation_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          content: Json | null
          created_at: string
          id: number
          modified_at: string | null
          owner_id: string
          project_id: number
        }
        Insert: {
          content?: Json | null
          created_at?: string
          id?: number
          modified_at?: string | null
          owner_id: string
          project_id: number
        }
        Update: {
          content?: Json | null
          created_at?: string
          id?: number
          modified_at?: string | null
          owner_id?: string
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "documents_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      figure_groups: {
        Row: {
          created_at: string
          description: string | null
          id: number
          owner_id: string
          project_id: number
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          owner_id: string
          project_id: number
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          owner_id?: string
          project_id?: number
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "figure_groups_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "figure_groups_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      figures: {
        Row: {
          caption: string
          created_at: string
          figure_group_id: number
          id: number
          owner_id: string
          url: string
        }
        Insert: {
          caption: string
          created_at?: string
          figure_group_id: number
          id?: number
          owner_id: string
          url: string
        }
        Update: {
          caption?: string
          created_at?: string
          figure_group_id?: number
          id?: number
          owner_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "figures_figure_group_id_fkey"
            columns: ["figure_group_id"]
            isOneToOne: false
            referencedRelation: "figure_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "figures_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      journals: {
        Row: {
          abstract_limit: number
          body_limit: number
          created_at: string
          id: number
          name: string
          references_limit: number
          sections: string[]
          styling_requirements: string | null
          tables_figures_limit: number
        }
        Insert: {
          abstract_limit: number
          body_limit: number
          created_at?: string
          id?: number
          name: string
          references_limit: number
          sections: string[]
          styling_requirements?: string | null
          tables_figures_limit: number
        }
        Update: {
          abstract_limit?: number
          body_limit?: number
          created_at?: string
          id?: number
          name?: string
          references_limit?: number
          sections?: string[]
          styling_requirements?: string | null
          tables_figures_limit?: number
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          zotero_api_key: string | null
          zotero_oauth_state: number
          zotero_userId: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          zotero_api_key?: string | null
          zotero_oauth_state?: number
          zotero_userId?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          zotero_api_key?: string | null
          zotero_oauth_state?: number
          zotero_userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          id: number
          owner_id: string
          title: string | null
        }
        Insert: {
          id?: number
          owner_id: string
          title?: string | null
        }
        Update: {
          id?: number
          owner_id?: string
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
