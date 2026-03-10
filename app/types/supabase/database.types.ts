export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: '14.1'
  }
  public: {
    Tables: {
      demand: {
        Row: {
          created_at: string
          description: string
          dispute_date: string | null
          electronic_process_number: string | null
          id: string
          internal_process_number: number
          object_types_id: number | null
          owner_id: string
          status: string | null
          updated_at: string
          year: number
        }
        Insert: {
          created_at?: string
          description: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number: number
          object_types_id?: number | null
          owner_id?: string
          status?: string | null
          updated_at?: string
          year: number
        }
        Update: {
          created_at?: string
          description?: string
          dispute_date?: string | null
          electronic_process_number?: string | null
          id?: string
          internal_process_number?: number
          object_types_id?: number | null
          owner_id?: string
          status?: string | null
          updated_at?: string
          year?: number
        }
        Relationships: [
          {
            foreignKeyName: 'demand_object_types_id_fkey'
            columns: ['object_types_id']
            isOneToOne: false
            referencedRelation: 'object_types'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'demand_owner_id_fkey'
            columns: ['owner_id']
            isOneToOne: false
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
        ]
      }
      demand_events: {
        Row: {
          created_at: string
          demands_id: string
          description: string | null
          id: number
        }
        Insert: {
          created_at?: string
          demands_id: string
          description?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          demands_id?: string
          description?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'demand_events_demands_id_fkey'
            columns: ['demands_id']
            isOneToOne: false
            referencedRelation: 'demand'
            referencedColumns: ['id']
          },
        ]
      }
      demand_sequences: {
        Row: {
          current_number: number
          year: number
        }
        Insert: {
          current_number: number
          year?: number
        }
        Update: {
          current_number?: number
          year?: number
        }
        Relationships: []
      }
      election: {
        Row: {
          created_at: string
          date: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          date: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      expense_types: {
        Row: {
          created_at: string
          expense_number: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          expense_number: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          expense_number?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      object_types: {
        Row: {
          created_at: string
          id: number
          name: string
          ptres: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          ptres: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          ptres?: number
        }
        Relationships: []
      }
      product_class: {
        Row: {
          code: number
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          code: number
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          code?: number
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      product_specifications: {
        Row: {
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean | null
          cat_mat: number
          created_at: string
          description: string
          expense_type_id: string
          id: string
          name: string
          nat_bec: number | null
          nat_gov: number | null
          pdm: number | null
          product_class_id: string | null
          specifications: Json | null
          updated_at: string
        }
        Insert: {
          active?: boolean | null
          cat_mat: number
          created_at?: string
          description: string
          expense_type_id: string
          id?: string
          name: string
          nat_bec?: number | null
          nat_gov?: number | null
          pdm?: number | null
          product_class_id?: string | null
          specifications?: Json | null
          updated_at?: string
        }
        Update: {
          active?: boolean | null
          cat_mat?: number
          created_at?: string
          description?: string
          expense_type_id?: string
          id?: string
          name?: string
          nat_bec?: number | null
          nat_gov?: number | null
          pdm?: number | null
          product_class_id?: string | null
          specifications?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'product_product_class_id_fkey'
            columns: ['product_class_id']
            isOneToOne: false
            referencedRelation: 'product_class'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'products_expense_types_id_fkey'
            columns: ['expense_type_id']
            isOneToOne: false
            referencedRelation: 'expense_types'
            referencedColumns: ['id']
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          name: string | null
          role: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id: string
          name?: string | null
          role?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          name?: string | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      unity: {
        Row: {
          created_at: string
          id: string
          name: string
          name_bec: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          name_bec: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          name_bec?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      users: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          id: string | null
          name: string | null
          role: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      can_read_demand: { Args: { demand_owner: string }; Returns: boolean }
      can_read_profile: { Args: { profile_id: string }; Returns: boolean }
      is_admin: { Args: never; Returns: boolean } | { Args: { user_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
